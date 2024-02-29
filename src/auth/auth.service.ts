import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { UserTokenService } from '../user-token/user-token.service'
import { UserEntity } from '../user/entities/user.entity'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { ApiError } from '../utils/api.error'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private userTokenService: UserTokenService,
  ) {}

  async getUserData(user: UserEntity) {
    return {
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      email: user.email,
    }
  }

  async updateRefreshToken(
    user: UserEntity,
    tokens: { accessToken: string; refreshToken: string },
  ) {
    await this.userTokenService.saveToken(user.id, tokens.refreshToken)
  }

  async signUp(dto: CreateUserDto) {
    const candidate = await this.userService.findByEmail(dto.email)
    if (candidate) {
      const tokens = await this.getTokens(candidate.id, candidate.email)
      return {
        auth: {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        },
        items: await this.getUserData(candidate),
      }
    }
    const user = await this.userService.create(dto)
    const tokens = await this.getTokens(user.id, user.email)
    return {
      auth: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
      items: await this.getUserData(user),
    }
  }

  async refresh(refreshToken: string) {
    const tokenData = await this.userTokenService.findToken(refreshToken)
    if (!tokenData) throw ApiError.NotFound('Токен отсутствует')
    const user = await this.userService.findById(tokenData.user_id)
    if (!user) throw ApiError.NotFound('Пользователь не найден')
    const tokens = await this.getTokens(user.id, user.email)
    await this.updateRefreshToken(user, tokens)

    return {
      auth: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
      items: await this.getUserData(user),
    }
  }

  async logout(refreshToken: string) {
    return this.userTokenService.removeToken(refreshToken)
  }

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: this.configService.get<string>('EXPIRES_IN_AT'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<string>('EXPIRES_IN_RT'),
        },
      ),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }
}

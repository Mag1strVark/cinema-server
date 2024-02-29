import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UserTokenEntity } from './entities/user-token.entity'

@Injectable()
export class UserTokenService {
  constructor(
    @InjectModel(UserTokenEntity) private userTokenRepository: typeof UserTokenEntity,
  ) {}

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await this.userTokenRepository.findOne({
      where: { user_id: userId },
    })
    if (tokenData) {
      tokenData.refresh_token = refreshToken
      await tokenData.save()
    } else {
      await this.userTokenRepository.create({
        user_id: userId,
        refresh_token: refreshToken,
      })
    }
  }

  async findToken(refreshToken: string) {
    return this.userTokenRepository.findOne({ where: { refresh_token: refreshToken } })
  }

  async removeToken(refreshToken: string) {
    return this.userTokenRepository.destroy({ where: { refresh_token: refreshToken } })
  }
}

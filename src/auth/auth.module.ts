import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AccessTokenStrategy } from './strategies/accessToken.strategy'
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from '../user/user.module'
import { UserTokenModule } from '../user-token/user-token.module'
import { JwtModule } from '@nestjs/jwt'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserEntity } from '../user/entities/user.entity'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  imports: [
    ConfigModule,
    UserModule,
    UserTokenModule,
    JwtModule.register({}),
    SequelizeModule.forFeature([UserEntity]),
  ],
})
export class AuthModule {}

import { Module } from '@nestjs/common'
import { UserTokenService } from './user-token.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserTokenEntity } from './entities/user-token.entity'

@Module({
  providers: [UserTokenService],
  exports: [UserTokenService],
  imports: [SequelizeModule.forFeature([UserTokenEntity])],
})
export class UserTokenModule {}

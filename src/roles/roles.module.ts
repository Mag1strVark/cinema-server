import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoleEntity } from './entities/role.entity'
import { UserEntity } from '../user/entities/user.entity'
import { UserRoleEntity } from './entities/user-role.entitiy'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([RoleEntity, UserEntity, UserRoleEntity]),
    JwtModule.register({}),
  ],
  exports: [RolesService],
})
export class RolesModule {}

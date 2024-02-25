import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserEntity } from './entities/user.entity'
import { RoleEntity } from '../roles/entities/role.entity'
import { UserRoleEntity } from '../roles/entities/user-role.entitiy'
import { RolesModule } from '../roles/roles.module'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([UserEntity, RoleEntity, UserRoleEntity]),
    RolesModule,
  ],
  exports: [UserService],
})
export class UserModule {}

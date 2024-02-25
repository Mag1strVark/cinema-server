import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { RoleEntity } from './role.entity'
import { UserEntity } from '../../user/entities/user.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoleEntity extends Model<UserRoleEntity> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @ForeignKey(() => RoleEntity)
  @Column({ type: DataType.STRING })
  roleId: string

  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.STRING })
  userId: string
}

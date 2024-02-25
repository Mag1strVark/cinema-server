import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { CreateRoleDto } from '../dto/create-role.dto'
import { UserEntity } from '../../user/entities/user.entity'
import { UserRoleEntity } from './user-role.entitiy'
import { v4 as uuidv4 } from 'uuid'

@Table({ tableName: 'roles', createdAt: false, updatedAt: false })
export class RoleEntity extends Model<RoleEntity, CreateRoleDto> {
  @ApiProperty({
    example: 'cae8df58-3b05-4579-ba29-f9b16ae6928a',
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string

  @BelongsToMany(() => UserEntity, () => UserRoleEntity)
  users: UserEntity[]
}

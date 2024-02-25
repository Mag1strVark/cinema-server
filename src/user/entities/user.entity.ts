import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { CreateUserDto } from '../dto/create-user.dto'
import { ApiProperty } from '@nestjs/swagger'
import { RoleEntity } from '../../roles/entities/role.entity'
import { UserRoleEntity } from '../../roles/entities/user-role.entitiy'
import { v4 as uuidv4 } from 'uuid'

@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class UserEntity extends Model<UserEntity, CreateUserDto> {
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

  @ApiProperty({ description: 'Имя' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string

  @ApiProperty({ description: 'Почтовый индекс' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string

  @ApiProperty({ description: 'Номер телефона' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone_number: string

  @ApiProperty({ description: 'Пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string

  @ApiProperty({ type: [RoleEntity] })
  @BelongsToMany(() => RoleEntity, () => UserRoleEntity)
  roles: RoleEntity[]
}

import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { CreateUserDto } from '../dto/create-user.dto'
import { ApiProperty } from '@nestjs/swagger'
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
  name: string

  @ApiProperty({ description: 'Фамилия' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  surname: string

  @ApiProperty({ description: 'Отчество' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  patronymic: string

  @ApiProperty({ description: 'Почтовый индекс' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string
}

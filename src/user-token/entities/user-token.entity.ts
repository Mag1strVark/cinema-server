import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { CreateUserTokenDto } from '../dto/create-user-token.dto'
import { UserEntity } from '../../user/entities/user.entity'

@Table({ tableName: 'user_tokens', createdAt: false, updatedAt: false })
export class UserTokenEntity extends Model<UserTokenEntity, CreateUserTokenDto> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  refresh_token: string

  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string
}

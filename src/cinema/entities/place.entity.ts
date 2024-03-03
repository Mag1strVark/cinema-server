import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { v4 as uuidv4 } from 'uuid'
import { UserEntity } from '../../user/entities/user.entity'
import { SeanceEntity } from './seance.entity'
import { SeancePlaceEntity } from './seance-place.entity'

@Table({ tableName: 'place', createdAt: false, updatedAt: false })
export class PlaceEntity extends Model<PlaceEntity> {
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

  @ApiProperty({ description: 'Цена' })
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price: number

  @ApiProperty({ example: 'OPEN', description: 'тип OPEN | CLOSE' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string

  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  user_id: string

  @BelongsToMany(() => SeanceEntity, () => SeancePlaceEntity)
  seances: SeanceEntity[]
}

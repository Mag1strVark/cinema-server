import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { ApiProperty } from '@nestjs/swagger'
import { ScheduleSeancesEntity } from './schedule-seances.entity'
import { ScheduleEntity } from './schedule.entity'
import { SeancePlaceEntity } from './seance-place.entity'
import { PlaceEntity } from './place.entity'

@Table({ tableName: 'seance', createdAt: false, updatedAt: false })
export class SeanceEntity extends Model<SeanceEntity> {
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

  @ApiProperty({ description: 'Время просмотра' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  time: string

  @BelongsToMany(() => ScheduleEntity, () => ScheduleSeancesEntity)
  schedule: ScheduleEntity[]

  @BelongsToMany(() => PlaceEntity, () => SeancePlaceEntity)
  places: PlaceEntity[]
}

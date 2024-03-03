import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { ApiProperty } from '@nestjs/swagger'
import { CinemaEntity } from './cinema.entity'
import { SeanceEntity } from './seance.entity'
import { ScheduleSeancesEntity } from './schedule-seances.entity'

@Table({ tableName: 'schedule', createdAt: false, updatedAt: false })
export class ScheduleEntity extends Model<ScheduleEntity> {
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

  @ForeignKey(() => CinemaEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  filmId: string

  @ApiProperty({ description: 'дата просмотра' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date: string

  @BelongsToMany(() => SeanceEntity, () => ScheduleSeancesEntity)
  seances: SeanceEntity[]
}

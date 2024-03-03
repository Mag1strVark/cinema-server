import { v4 as uuidv4 } from 'uuid'
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ScheduleEntity } from './schedule.entity'
import { SeanceEntity } from './seance.entity'

@Table({ tableName: 'schedule_seances', createdAt: false, updatedAt: false })
export class ScheduleSeancesEntity extends Model<ScheduleSeancesEntity> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @ForeignKey(() => ScheduleEntity)
  @Column({ type: DataType.STRING })
  scheduleId: string

  @ForeignKey(() => SeanceEntity)
  @Column({ type: DataType.STRING })
  seanceId: string
}

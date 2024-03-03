import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { SeanceEntity } from './seance.entity'
import { PlaceEntity } from './place.entity'

@Table({ tableName: 'seance_place', createdAt: false, updatedAt: false })
export class SeancePlaceEntity extends Model<SeancePlaceEntity> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @ForeignKey(() => SeanceEntity)
  @Column({ type: DataType.STRING })
  seanceId: string

  @ForeignKey(() => PlaceEntity)
  @Column({ type: DataType.STRING })
  placeId: string
}

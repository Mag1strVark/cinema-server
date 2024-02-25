import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'

@Table({ tableName: 'ys3', createdAt: false, updatedAt: false })
export class YS3Entity extends Model<YS3Entity> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  id: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Location: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  key: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Key: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Bucket: string
}

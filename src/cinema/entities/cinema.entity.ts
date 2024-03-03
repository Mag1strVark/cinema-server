import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { CreateCinemaDto } from '../dto/create-cinema.dto'
import { ApiProperty } from '@nestjs/swagger'

@Table({ tableName: 'cinema', createdAt: false, updatedAt: false })
export class CinemaEntity extends Model<CinemaEntity, CreateCinemaDto> {
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

  @ApiProperty({ description: 'Название фильма' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string

  @ApiProperty({ description: 'Описание фильма' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string

  @ApiProperty({ description: 'Дата релиза' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  releaseDate: string

  @ApiProperty({ description: 'Ссылка на картинку' })
  @Column({
    type: DataType.BLOB,
    allowNull: false,
  })
  img: string
}

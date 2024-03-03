import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'

export class FormUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: 'Имя' })
  name: string

  @ApiProperty({ description: 'Фамилия' })
  surname: string

  @ApiProperty({ description: 'Отчество' })
  patronymic: string

  @ApiProperty({ description: 'Почтовый индекс' })
  email: string
}

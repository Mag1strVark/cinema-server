import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: 'ФИО' })
  readonly full_name: string

  @ApiProperty({ description: 'Почтовый индекс' })
  readonly email: string

  @ApiProperty({ description: 'Номер телефона' })
  readonly phone_number: string
}

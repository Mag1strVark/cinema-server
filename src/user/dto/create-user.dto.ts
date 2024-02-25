import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: 'ФИО' })
  readonly full_name: string

  @ApiProperty({ description: 'Почтовый индекс' })
  readonly email: string

  @ApiProperty({ description: 'Пароль' })
  readonly password: string

  @ApiProperty({ description: 'Номер телефона' })
  readonly phone_number: string
}

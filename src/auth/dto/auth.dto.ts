import { ApiProperty } from '@nestjs/swagger'

export class AuthDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый индекс' })
  readonly email: string

  @ApiProperty({ example: 'root', description: 'Пароль' })
  readonly password: string
}

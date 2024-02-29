import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: 'Почтовый индекс' })
  readonly email: string
}

import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from '../user/dto/create-user.dto'

@ApiTags('Авторизация')
@Controller('/api/v1/auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Регистрация' })
  @Post('sign-up')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto)
  }

  @ApiOperation({ summary: 'Обновление токенов' })
  @Get('refresh')
  refresh(@Body() refreshToken: string) {
    return this.authService.refresh(refreshToken)
  }

  @ApiOperation({ summary: 'Выход' })
  @Post('logout')
  logout(@Body() refreshToken: string) {
    return this.authService.logout(refreshToken)
  }
}

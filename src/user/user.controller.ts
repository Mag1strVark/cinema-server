import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/accessToken.guard'
import { UserEntity } from './entities/user.entity'
@ApiTags('Пользователи')
@UseGuards(AccessTokenGuard)
@ApiBearerAuth()
@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Получение информации о пользователе' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }
}

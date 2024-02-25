import { Controller, Get, Body, Patch, Param, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/accessToken.guard'
import { UserEntity } from './entities/user.entity'
import { RolesGuard } from '../common/roles.guard'
import { Roles } from '../common/roles-auth.decorator'

@ApiTags('Пользователи')
@UseGuards(AccessTokenGuard)
@ApiBearerAuth()
@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Получение списка пользователей (ADMIN)' })
  @ApiResponse({ status: 200, type: [UserEntity] })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  findAll() {
    return this.userService.findAll()
  }

  @ApiOperation({ summary: 'Получение информации о пользователе' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @ApiOperation({ summary: 'Обновление информации о пользователе' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }
}

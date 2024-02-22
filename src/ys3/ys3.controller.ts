import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Ys3Service } from './ys3.service'
import { CreateYs3Dto } from './dto/create-ys3.dto'
import { UpdateYs3Dto } from './dto/update-ys3.dto'

@Controller('ys3')
export class Ys3Controller {
  constructor(private readonly ys3Service: Ys3Service) {}

  @Post()
  create(@Body() createYs3Dto: CreateYs3Dto) {
    return this.ys3Service.create(createYs3Dto)
  }

  @Get()
  findAll() {
    return this.ys3Service.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ys3Service.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYs3Dto: UpdateYs3Dto) {
    return this.ys3Service.update(+id, updateYs3Dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ys3Service.remove(+id)
  }
}

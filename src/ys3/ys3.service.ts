import { Injectable } from '@nestjs/common'
import { CreateYs3Dto } from './dto/create-ys3.dto'
import { UpdateYs3Dto } from './dto/update-ys3.dto'

@Injectable()
export class Ys3Service {
  create(createYs3Dto: CreateYs3Dto) {
    return 'This action adds a new ys3'
  }

  findAll() {
    return `This action returns all ys3`
  }

  findOne(id: number) {
    return `This action returns a #${id} ys3`
  }

  update(id: number, updateYs3Dto: UpdateYs3Dto) {
    return `This action updates a #${id} ys3`
  }

  remove(id: number) {
    return `This action removes a #${id} ys3`
  }
}

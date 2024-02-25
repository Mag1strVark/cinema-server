import { Module } from '@nestjs/common'
import { Ys3Service } from './ys3.service'

@Module({
  controllers: [],
  providers: [Ys3Service],
})
export class Ys3Module {}

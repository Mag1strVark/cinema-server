import { Module } from '@nestjs/common'
import { Ys3Service } from './ys3.service'
import { Ys3Controller } from './ys3.controller'

@Module({
  controllers: [Ys3Controller],
  providers: [Ys3Service],
})
export class Ys3Module {}

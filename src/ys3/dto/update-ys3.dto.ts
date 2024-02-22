import { PartialType } from '@nestjs/swagger'
import { CreateYs3Dto } from './create-ys3.dto'

export class UpdateYs3Dto extends PartialType(CreateYs3Dto) {}

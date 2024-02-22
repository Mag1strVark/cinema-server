import { Test, TestingModule } from '@nestjs/testing'
import { Ys3Controller } from './ys3.controller'
import { Ys3Service } from './ys3.service'

describe('Ys3Controller', () => {
  let controller: Ys3Controller

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ys3Controller],
      providers: [Ys3Service],
    }).compile()

    controller = module.get<Ys3Controller>(Ys3Controller)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

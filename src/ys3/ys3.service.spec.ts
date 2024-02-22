import { Test, TestingModule } from '@nestjs/testing'
import { Ys3Service } from './ys3.service'

describe('Ys3Service', () => {
  let service: Ys3Service

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ys3Service],
    }).compile()

    service = module.get<Ys3Service>(Ys3Service)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

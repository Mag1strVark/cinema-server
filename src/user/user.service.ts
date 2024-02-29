import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UserEntity } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity) private userRepository: typeof UserEntity) {}

  async findOne(id: string): Promise<UserEntity> {
    return await this.userRepository.findByPk(id)
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } })
  }

  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.create(dto)
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id } })
  }
}

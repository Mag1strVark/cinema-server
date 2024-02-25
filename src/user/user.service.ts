import { Injectable } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/sequelize'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity) private userRepository: typeof UserEntity) {}

  findAll() {}

  findOne(id: number) {}

  update(id: number, updateUserDto: UpdateUserDto) {}
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  findOne(user): Promise<User> {
    return this.userModel.findOne({ where: user });
  }
  create(user): Promise<User> {
    return this.userModel.create(user);
  }
}

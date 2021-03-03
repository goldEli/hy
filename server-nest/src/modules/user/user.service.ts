import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findOne(user): Promise<User> {
    return this.userRepository.findOne(user);
  }
  create(user): Promise<User> {
    return this.userRepository.save(user);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  findOne(user): Promise<User> {
    return this.userRepository.findOne(user);
  }
  create(user): Promise<User> {
    return this.userRepository.save(user);
  }
  login(user) {
    const payload = { name: user.name, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

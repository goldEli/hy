import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  getAll() {
    return this.userRepository.find();
  }
  findOne(user): Promise<User> {
    return this.userRepository.findOne(user);
  }
  create(user): Promise<User> {
    return this.userRepository.save(user);
  }
  login(user) {
    return {
      access_token: this.generateJWT(user),
    };
  }
  private generateJWT(user) {
    // const today = new Date();
    // const exp = new Date(today);
    // exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12, // 12h
      },
      jwtConstants.secret,
    );
  }
}

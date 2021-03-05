import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { jwt as jwtConfig } from 'src/config';

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
  findByName(name: string): Promise<User> {
    return this.userRepository.findOne({ where: { name } });
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
    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        exp: jwtConfig.exp, // 12h
      },
      jwtConfig.secret,
    );
  }
}

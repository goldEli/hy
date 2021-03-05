import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { errorResponse } from 'src/utils';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({ usernameField: 'name' });
  }

  async validate(name: string, password: string): Promise<any> {
    console.log(name, password);
    const user = await this.userService.findOne({ name, password });
    if (!user) {
      throw new UnauthorizedException('123');
    }
    return user;
  }
}

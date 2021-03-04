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
    const user = await this.userService.findOne({ name, password });
    if (!user) {
      throw new UnauthorizedException(
        errorResponse({ message: '账号密码错误' }),
      );
    }
    return user;
  }
}

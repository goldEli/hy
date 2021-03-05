import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../modules/user/constants';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      try {
        const decoded = jwt.verify(token, jwtConstants.secret);
        console.log(decoded);
      } catch (error) {
        throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
      }
      // const user = await this.userService.findById(decoded.id);
      // console.log(decoded);

      // if (!user) {
      //   throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
      // }

      // req.user = user.user;
      next();
    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}

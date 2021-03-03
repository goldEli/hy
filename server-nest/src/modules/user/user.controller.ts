import {
  Body,
  Controller,
  createParamDecorator,
  HttpException,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { errorResponse, successResponse } from 'src/utils';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  async login(@Body() user: LoginDto) {
    const res = await this.userService.findOne(user);
    if (!res) return errorResponse({ message: 'not fount' });

    return successResponse({ message: 'login success' });
  }

  @Post('register')
  @ApiOperation({ summary: 'User register' })
  register() {
    return 'register success';
  }
}

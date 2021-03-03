import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { errorResponse, successResponse } from 'src/utils';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  async login(@Body() user: LoginDto) {
    // const res = await this.userService.findOne(user);
    // if (!res) return errorResponse({ message: 'user or password error' });

    return successResponse({ message: 'login success' });
  }

  @Post('register')
  @ApiOperation({ summary: 'User register' })
  async register(@Body() user: LoginDto) {
    const { password, ...res } = await this.userService.create(user);
    const token = await this.userService.login(user);
    return successResponse({
      message: 'register success',
      data: { ...res, token },
    });
  }
}

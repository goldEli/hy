import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { errorResponse, successResponse } from 'src/utils';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  async login(@Body() user: LoginDto) {
    const res = await this.userService.findOne(user);
    if (!res) return errorResponse({ message: 'user or password error' });

    const token = await this.userService.login(user);
    return successResponse({ message: 'login success', data: token });
  }

  @Post('register')
  @ApiOperation({ summary: 'User register' })
  async register(@Body() user: LoginDto) {
    const { password, ...res } = await this.userService.create(user);
    return successResponse({
      message: 'register success',
      data: { ...res },
    });
  }

  @Get()
  @ApiOperation({ summary: 'User list' })
  index(@Request() req) {
    return this.userService.getAll();
  }
}

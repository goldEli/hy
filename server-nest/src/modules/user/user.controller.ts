import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
    console.log(res);
    return 'login success';
  }

  @Post('register')
  @ApiOperation({ summary: 'User register' })
  register() {
    return 'register success';
  }
}

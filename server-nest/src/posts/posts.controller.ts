import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ description: '博客列表', summary: "111" })
  index() {
    return 'index';
  }

  @Post()
  create() {
    return {
      status: 200,
    };
  }

  @Get(':id')
  detail() {
    return {
      status: 200,
      content: 'asdfasfas',
    };
  }
}

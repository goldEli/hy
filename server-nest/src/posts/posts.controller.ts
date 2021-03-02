import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ title: '帖子标题' })
  title: string;
  @ApiProperty({ title: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '博客列表' })
  index() {
    return 'index';
  }

  @Post()
  @ApiOperation({ summary: '创建博客' })
  create(@Body() body: CreatePostDto) {
    console.log(body);

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

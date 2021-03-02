import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ title: '帖子标题' })
  title: string;
  @ApiProperty({ title: '帖子内容' })
  content: string;
}

class UpdatePostDto {
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
  @ApiOperation({ summary: '博客详情' })
  detail(@Param('id') id: string) {
    return {
      status: 200,
      data: {
        id,
        content: 123,
      },
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除博客' })
  remove(@Param('id') id: string) {
    return {
      status: 200,
      message: '删除成功',
      data: id,
    };
  }
  @Put(':id')
  @ApiOperation({ summary: '修改博客' })
  update(@Param('id') id: string, @Body() body: UpdatePostDto) {
    return {
      status: 200,
      message: '修改成功',
      data: body,
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export class CreateClientDto {
  name: string;
}

@Controller('client')
@ApiTags('Client')
export class ClientController {
  @Get()
  @ApiOperation({ summary: 'Get list of clients' })
  index() {
    return [];
  }
  @Post()
  @ApiOperation({ summary: 'Create client' })
  create(@Body() client: CreateClientDto) {
    return {
      status: 200,
      message: 'success',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update client info' })
  update(@Param('id') id: string, @Body() client: CreateClientDto) {
    return {
      status: 200,
      message: 'success',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete client' })
  del(@Param('id') id: string) {
    return {
      status: 200,
      message: 'success',
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { successResponse } from 'src/utils';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
@ApiTags('Client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiOperation({ summary: 'Get list of clients' })
  async index() {
    const res = await this.clientService.findAll();
    return successResponse({ data: res });
  }

  @Post()
  @ApiOperation({ summary: 'Create client' })
  async create(@Body() createClientDto: CreateClientDto) {
    const res = await this.clientService.create(createClientDto);
    return res;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update client info' })
  async update(
    @Param('id') id: number,
    @Body() createClientDto: CreateClientDto,
  ) {
    const res = await this.clientService.update(id, createClientDto);
    return res;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete client' })
  async del(@Param('id', ParseIntPipe) id: number) {
    await this.clientService.remove(id);
    return {};
  }
}

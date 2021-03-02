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
import { ClientService } from './client.service';
import { Client } from './client.model';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
@ApiTags('Client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiOperation({ summary: 'Get list of clients' })
  index(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create client' })
  async create(@Body() createClientDto: CreateClientDto) {
    const res = await this.clientService.create(createClientDto);
    return {
      status: 200,
      message: 'success',
      data: res,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update client info' })
  async update(
    @Param('id') id: number,
    @Body() createClientDto: CreateClientDto,
  ) {
    const res = await this.clientService.update(id, createClientDto);
    return {
      status: 200,
      message: 'success',
      data: res,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete client' })
  async del(@Param('id') id: number) {
    await this.clientService.remove(id);
    return {
      status: 200,
      message: 'success',
    };
  }
}
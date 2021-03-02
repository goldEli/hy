import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientController } from './client.controller';
import { Client } from './client.model';
import { ClientService } from './client.service';

@Module({
  imports: [SequelizeModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}

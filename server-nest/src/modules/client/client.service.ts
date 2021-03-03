import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: string): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }

  update(id: number, client): Promise<Client> {
    return this.clientRepository.save({ ...client, id });
  }

  create(client): Promise<Client> {
    return this.clientRepository.save(client);
  }
}

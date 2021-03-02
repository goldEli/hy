import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientModel.findAll();
  }

  findOne(id: string): Promise<Client> {
    return this.clientModel.findOne({ where: { id } });
  }

  remove(id: number): Promise<number> {
    return this.clientModel.destroy({ where: { id } });
  }

  update(id: number, client): Promise<[number, Client[]]> {
    return this.clientModel.update({ name: client.name }, { where: { id } });
  }

  create(client): Promise<Client> {
    return this.clientModel.create(client);
  }
}
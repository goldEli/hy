import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  PrimaryKey,
  Table,
  Model,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'client',
})
export class Client extends Model<Client> {
  @PrimaryKey
  @AutoIncrement
  @ApiProperty({ title: 'client id' })
  @Column
  id: number;

  @ApiProperty({ title: 'client name' })
  @Column
  name: string;
}

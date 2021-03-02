import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ title: 'client name' })
  @IsString()
  name: string;
}

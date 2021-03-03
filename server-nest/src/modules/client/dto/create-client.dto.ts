import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ title: 'client name' })
  @IsString()
  @IsNotEmpty()
  name: string;
}

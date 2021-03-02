import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ title: 'client name' })
  name: string;
}

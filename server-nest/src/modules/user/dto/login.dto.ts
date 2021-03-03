import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ title: 'user name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ title: 'user password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

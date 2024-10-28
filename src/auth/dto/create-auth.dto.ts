import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAuthDto {
    @ApiProperty({ required: true, description: 'Admin password', example: 'YourSecurePassword1029!' })
    @Length(8, 100)
    @IsString()
    password: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateButtonDto } from './create-button.dto';
import { IsInt, IsNotEmpty, IsPositive, Max } from 'class-validator';

export class UpdateButtonDto extends PartialType(CreateButtonDto) {
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Max(255)
    count: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateButtonDto } from './create-button.dto';
import { IsNotEmpty, Max, Min } from 'class-validator';

export class UpdateButtonDto extends PartialType(CreateButtonDto) {
    @IsNotEmpty()
    @Min(1)
    @Max(255)
    count: number;
}

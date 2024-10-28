import { PickType } from '@nestjs/swagger';
import { CreateButtonDto } from './create-button.dto';
import { IsInt, IsNotEmpty, IsPositive, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateButtonDto extends PickType(CreateButtonDto, ['itemName', 'count'] as const) {
    @ApiProperty({ description: 'Name of the item for this button', required: false })
    itemName: string;

    @ApiProperty({ description: 'Quantity to be added', required: true, example: 1, minimum: 1, maximum: 255 })
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(1)
    @Max(255)
    count: number;
}

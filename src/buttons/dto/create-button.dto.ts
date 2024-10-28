import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateButtonDto {
    @ApiProperty({ type: Number, minimum: 0, required: true })
    @IsInt()
    @Min(0)
    buttonNo: number;

    @ApiProperty({ type: String, example: 'Pickled Raddish', minLength: 2, maxLength: 255, required: true })
    @IsString()
    @Length(2, 255)
    itemName: string;

    @ApiProperty({ type: Number, minimum: 0, required: true })
    @IsInt()
    @Min(1)
    count: number;
}

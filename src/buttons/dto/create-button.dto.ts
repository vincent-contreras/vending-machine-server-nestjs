import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateButtonDto {
    @IsInt()
    buttonNo: number;

    @IsString()
    @Length(2, 255)
    itemName: string;

    @IsInt()
    @Min(1)
    count: number;
}

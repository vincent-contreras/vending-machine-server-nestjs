import { IsString, Length } from "class-validator";

export class CreateAuthDto {
    @Length(8,100)
    @IsString()
    password: string;
}

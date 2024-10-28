import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Button {
    @ApiProperty({ description: 'Button number', example: 1 })
    @Prop({ required: true })
    buttonNo: number;

    @ApiProperty({ description: 'Name for the item', example: 'Picked kimchi' })
    @Prop({ required: true })
    itemName: string;

    @ApiProperty({ description: 'Available quantity', example: 100 })
    @Prop({ required: true })
    count: number;
}

export const ButtonSchema = SchemaFactory.createForClass(Button);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Button {
    @Prop({ required: true })
    buttonNo: number;

    @Prop({ required: true })
    itemName: string;

    @Prop({ required: true })
    count: number;
}

export const ButtonSchema = SchemaFactory.createForClass(Button);

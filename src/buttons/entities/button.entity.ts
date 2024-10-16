import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Button {
    @Prop()
    buttonNo: number;

    @Prop()
    itemName: string;

    @Prop()
    count: number;
}

export const ButtonSchema = SchemaFactory.createForClass(Button);

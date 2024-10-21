import { Module } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { ButtonsController } from './buttons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Button, ButtonSchema } from './entities/button.entity';

@Module({
    imports: [MongooseModule.forFeature([{ name: Button.name, schema: ButtonSchema }])],
    controllers: [ButtonsController],
    providers: [ButtonsService],
})
export class ButtonsModule {}

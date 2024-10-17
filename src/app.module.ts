import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { ButtonsModule } from './buttons/buttons.module';
import { ButtonSchema } from './buttons/entities/button.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'test'}),
    ButtonsModule
  ]
})
export class AppModule {}

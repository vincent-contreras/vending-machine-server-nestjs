import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { ButtonsModule } from './buttons/buttons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: process.env.DB_NAME }),
    ButtonsModule
  ]
})
export class AppModule {}

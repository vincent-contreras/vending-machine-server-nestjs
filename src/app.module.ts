import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { ButtonsModule } from './buttons/buttons.module';

const { DB_NAME, DB_HOST, DB_PORT } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${DB_HOST}:${DB_PORT}`, { dbName: DB_NAME }),
    ButtonsModule
  ]
})
export class AppModule {}

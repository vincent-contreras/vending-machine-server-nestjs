import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';

const { BASE_URL, SWAGGER_URL } = process.env;

export class SwaggerConfig {
  private app: INestApplication;

  constructor(nestApplication: INestApplication) {
    this.app = nestApplication;
  }

  setup() {
    if (process.env.NODE_ENV == 'production') return;

    console.log(`----- ${BASE_URL}`)
    console.log(`----- ${SWAGGER_URL}`)

    SwaggerModule.setup(
      path.join(BASE_URL, SWAGGER_URL),
      this.app,
      this.getDocument()
    );
  }

  private getDocument() {
    const documentBuilder = new DocumentBuilder()
      .setTitle('Vending Machine Server')
      .setDescription('Vending Machine Server that represents a vending machine')
      .setVersion('1.0')
      .build();

    return SwaggerModule.createDocument(this.app, documentBuilder);
  }
}

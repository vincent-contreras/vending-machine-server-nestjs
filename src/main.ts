import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerConfig } from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';

const { BASE_URL, APP_PORT } = process.env;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(BASE_URL);

    app.useGlobalPipes(new ValidationPipe());

    app.enableVersioning();

    new SwaggerConfig(app).setup();

    await app.listen(APP_PORT);
}
bootstrap();

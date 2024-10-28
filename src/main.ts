import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerConfig } from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

const { BASE_URL, APP_PORT, SWAGGER_URL } = process.env;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(BASE_URL);

    app.useGlobalPipes(new ValidationPipe());
    app.enableVersioning();

    new SwaggerConfig(app).setup();

    await app.listen(APP_PORT);

    let docsUrl = '';

    if (APP_PORT == '80') {
        docsUrl += 'http://localhost';
    } else if (APP_PORT == '443') {
        docsUrl += 'https://localhost';
    } else {
        docsUrl += `http://localhost:${APP_PORT}`;
    }

    docsUrl += `/${SWAGGER_URL}`;

    Logger.log(`Server has successfully started. Listening from port ${APP_PORT}...`, 'ServerStartup');
    Logger.log(`Access the documentation by visiting ${docsUrl}`);
}
bootstrap();

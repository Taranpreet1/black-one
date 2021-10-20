import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Black & one ")
    .setDescription("The court booking API ")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3300);
}
bootstrap();

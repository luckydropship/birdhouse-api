import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var cors = require('cors');


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4260);
}
bootstrap();

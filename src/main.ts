import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WordService } from './Word/word.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const wordService = app.get(WordService);
  await wordService.insertWordsIfEmpty();
  app.enableCors();
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

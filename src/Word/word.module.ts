import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWord } from './entitys/userWord.entity';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { Word } from './entitys/word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserWord, Word])],
  providers: [WordService],
  controllers: [WordController],
  exports: [WordService],
})
export class WordModule {}

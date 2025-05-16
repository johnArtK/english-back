import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWord } from './entitys/userWord.entity';
import { WordService } from './word.service';
import { WordController } from './word.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserWord])],
  providers: [WordService],
  controllers: [WordController],
  exports: [WordService],
})
export class WordModule {}

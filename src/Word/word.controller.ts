import {
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
  Patch,
  Query,
} from '@nestjs/common';
import { WordService } from './word.service';
import { JwtAuthGuard } from 'src/auth/jwt-strategy/jwt-auth.guard';

@Controller('words')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get()
  async getAllWords(@Query('page') page, @Query('size') size) {
    return await this.wordService.getAllWords(page, size);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUnknownWords(@Req() req, @Query('page') page, @Query('size') size) {
    const userId = req.user.id;
    return this.wordService.getUnlearnedWords(userId, page, size);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/learned')
  async getLearnedWords(@Req() req, @Query('page') page, @Query('size') size) {
    const userId = req.user.id;
    return this.wordService.getLearnedWords(userId, page, size);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':wordId/learn')
  async learn(@Param('wordId') wordId: number, @Req() req) {
    const userId = req.user.id;

    await this.wordService.markWordAsLearned(userId, wordId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':wordId/unlearn')
  async unlearn(@Param('wordId') wordId: number, @Req() req) {
    const userId = req.user.id;

    await this.wordService.unmarkWordAsLearned(userId, wordId);
  }
}

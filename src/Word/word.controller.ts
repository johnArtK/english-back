import { Controller, Get, Param, Req, UseGuards, Patch } from '@nestjs/common';
import { WordService } from './word.service';
import { JwtAuthGuard } from 'src/auth/jwt-strategy/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('words')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get()
  async getUnknownWords(@Req() req) {
    const userId = req.user.id;
    return this.wordService.getUnlearnedWords(userId);
  }

  @Get('/learned')
  async getLearnedWords(@Req() req) {
    const userId = req.user.id;
    return this.wordService.getLearnedWords(userId);
  }

  @Patch(':wordId/learn')
  async learn(@Param('wordId') wordId: number, @Req() req) {
    const userId = req.user.id;

    await this.wordService.markWordAsLearned(userId, wordId);
  }

  @Patch(':wordId/unlearn')
  async unlearn(@Param('wordId') wordId: number, @Req() req) {
    const userId = req.user.id;

    await this.wordService.unmarkWordAsLearned(userId, wordId);
  }
}

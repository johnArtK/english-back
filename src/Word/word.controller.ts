import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Param,
  Req,
  UnauthorizedException,
  UseGuards,
  Delete,
  Patch,
} from '@nestjs/common';
import { WordService } from './word.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-strategy/jwt-auth.guard';
import { WordDto } from './dto/word.dto';

@Controller('words')
export class WordController {
  constructor(private userService: WordService) {}

@Get('/unknown')
async getUnknownWords(@Req() req) {
  const userId = req.user.id;
  return this.userWordRepository.find({ where: { user: { id: userId }, isLearned: false } });
}

// Все изученные
@Get('/learned')
async getLearnedWords(@Req() req) {
  const userId = req.user.id;
  return this.userWordRepository.find({ where: { user: { id: userId }, isLearned: true } });
}


  @Patch(':wordId/unlearn')
async unlearn(@Param('wordId') wordId: number, @Req() req) {
  const userId = req.user.id;
  const userWord = await this.userWordRepository.findOneBy({ user: { id: userId }, word: { id: wordId } });
  userWord.isLearned = false;
  await this.userWordRepository.save(userWord);
}

@Patch(':wordId/unlearn')
async unlearn(@Param('wordId') wordId: number, @Req() req) {
  const userId = req.user.id;
  const userWord = await this.userWordRepository.findOneBy({ user: { id: userId }, word: { id: wordId } });
  userWord.isLearned = false;
  await this.userWordRepository.save(userWord);
}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getWords(@Req() req: Request, @Res() res: Response) {
    const userId = req?.user?.['userId'];
    if (!userId) {
      throw new UnauthorizedException('не авторизован');
    }
    const words = await this.userService.getUserWords(+userId);
    return res.json(words);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/add')
  async addWords(
    @Body() newWord: WordDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?.['userId'];
    if (!userId) {
      throw new UnauthorizedException('не авторизован');
    }

    const word = await this.userService.addUserWord(userId, newWord);
    return res.json(word);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteWords(
    @Param('id') wordId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?.['userId'];
    if (!userId) {
      throw new UnauthorizedException('не авторизован');
    }

    const word = await this.userService.deleteUserWord(userId, +wordId);
    return res.json(word);
  }
}

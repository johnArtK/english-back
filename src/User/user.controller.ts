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
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-strategy/jwt-auth.guard';

@Controller('words')
export class UserController {
  constructor(private userService: UserService) {}
@Get()
async get() {
  this.userService.createW()
}
  // @UseGuards(JwtAuthGuard)
  // @Get('/')
  // async getWords(@Req() req: Request, @Res() res: Response) {
  //   const userId = req?.user?.['userId'];
  //   if (!userId) {
  //     throw new UnauthorizedException('не авторизован');
  //   }
  //   const words = await this.userService.getUserWords(+userId);
  //   return res.json(words);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('/add')
  // async addWords(
  //   @Body() newWord: WordDto,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const userId = req?.user?.['userId'];
  //   if (!userId) {
  //     throw new UnauthorizedException('не авторизован');
  //   }

  //   const word = await this.userService.addUserWord(userId, newWord);
  //   return res.json(word);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Delete('/:id')
  // async deleteWords(
  //   @Param('id') wordId: string,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const userId = req?.user?.['userId'];
  //   if (!userId) {
  //     throw new UnauthorizedException('не авторизован');
  //   }

  //   const word = await this.userService.deleteUserWord(userId, +wordId);
  //   return res.json(word);
  // }
}

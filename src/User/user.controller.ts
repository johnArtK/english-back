import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('words')
export class UserController {
  constructor(private userService: UserService) {}

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
}

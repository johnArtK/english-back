import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt-strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { accessToken, refreshToken, user } =
      await this.authService.login(loginDto);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      // sameSite: 'none',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return res.json({ accessToken, user });
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const { accessToken, refreshToken, user } =
      await this.authService.register(registerDto);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      // secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.json({ accessToken, user });
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
      throw new UnauthorizedException('не авторизован');
    }

    const {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    } = await this.authService.refreshToken(refreshToken);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ accessToken, user });
  }
}

import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/User/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: RegisterDto) {
    const existingUser = await this.userService.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const { password, ...simpleUser } = user;
    return { user: simpleUser, ...this.generateTokens(user) };
  }

  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password, ...simpleUser } = user;
    return {
      user: simpleUser,
      accessToken: this.generateTokens(user).accessToken,
      refreshToken: this.generateTokens(user).refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.userService.findById(decoded.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const { password, ...simpleUser } = user;
      return { user: simpleUser, ...this.generateTokens(user) };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private generateTokens(user: any) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { accessToken, refreshToken };
  }
}

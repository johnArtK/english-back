// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';
// import { UserService } from './user.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private usersService: UserService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: "111",
//     });
//   }

//   async validate(payload: any) {
//     const user = await this.usersService.findByEmail(payload.email);
//     return user;
//   }
// }

// @Injectable()
// export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
//   constructor(private usersService: UserService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
//       ignoreExpiration: false,
//       secretOrKey: "111",
//       passReqToCallback: true,
//     });
//   }

//   async validate(req: any, payload: any) {
//     const refreshToken = req.body.refreshToken;
//     const user = await this.usersService.findByEmail(payload.email);
//     if (!user || !user.refreshToken) return null;
//     const isValid = await this.usersService.refreshToken(refreshToken, user);
//     if (!isValid) return null;
//     return user;
//   }
// }
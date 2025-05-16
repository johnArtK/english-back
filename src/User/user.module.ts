import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitys/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Word } from 'src/Word/entitys/word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Word])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

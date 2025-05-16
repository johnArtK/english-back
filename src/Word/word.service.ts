import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserWord } from './entitys/userWord.entity';
import { WordDto } from './dto/word.dto';
// import { Word } from './entitys/word.entity';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(UserWord)
    private userRepository: Repository<UserWord>,
  ) {}

  async addUserWord(userId: number, newWord: WordDto): Promise<UserWord> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['words'],
    });

    if (!user) {
      throw new Error('User not found');
    }

    const word = new UserWord();
    word.value = newWord.value;
    word.userId = user.id;

    return this.userRepository.manager.save(word);
  }

  async deleteUserWord(userId: number, wordId: number) {
    const word = await this.userRepository.manager.findOne(UserWord, {
      where: { id: wordId, userId },
    });

    if (!word) {
      throw new Error('Word not found or does not belong to the user');
    }

    return await this.userRepository.manager.remove(UserWord, word);
  }

  async getUserWords(userId: number): Promise<UserWord[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['words'],
    });

    return user?.words || [];
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { UserWord } from './entitys/userWord.entity';
import { Word } from './entitys/word.entity';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(UserWord)
    private userWordRepository: Repository<UserWord>,
    @InjectRepository(Word)
    private wordRepository: Repository<Word>,
  ) {}

  async getUnlearnedWords(userId: number): Promise<Word[]> {
    const learnedWordIds = await this.userWordRepository.find({
      where: { user: { id: userId }, isLearned: true },
      relations: ['word'],
    });

    const learnedIds = learnedWordIds.map((uw) => uw.word.id);

    return this.wordRepository.find({
      where: learnedIds.length ? { id: Not(In(learnedIds)) } : {},
    });
  }

  async getLearnedWords(userId: number): Promise<Word[]> {
    const learnedWords = await this.userWordRepository.find({
      where: { user: { id: userId }, isLearned: true },
      relations: ['word'],
    });

    return learnedWords.map((uw) => uw.word);
  }

  async markWordAsLearned(userId: number, wordId: number): Promise<void> {
    let userWord = await this.userWordRepository.findOne({
      where: { user: { id: userId }, word: { id: wordId } },
    });

    if (userWord) {
      userWord.isLearned = true;
    } else {
      userWord = this.userWordRepository.create({
        user: { id: userId },
        word: { id: wordId },
        isLearned: true,
      });
    }

    await this.userWordRepository.save(userWord);
  }

  async unmarkWordAsLearned(userId: number, wordId: number): Promise<void> {
    const userWord = await this.userWordRepository.findOne({
      where: { user: { id: userId }, word: { id: wordId } },
    });

    if (userWord) {
      userWord.isLearned = false;
      await this.userWordRepository.save(userWord);
    }
  }

  // async addUserWord(userId: number, newWord: WordDto): Promise<UserWord> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['words'],
  //   });

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   const word = new UserWord();
  //   word.value = newWord.value;
  //   word.userId = user.id;

  //   return this.userRepository.manager.save(word);
  // }

  // async deleteUserWord(userId: number, wordId: number) {
  //   const word = await this.userRepository.manager.findOne(UserWord, {
  //     where: { id: wordId, userId },
  //   });

  //   if (!word) {
  //     throw new Error('Word not found or does not belong to the user');
  //   }

  //   return await this.userRepository.manager.remove(UserWord, word);
  // }

  // async getUserWords(userId: number): Promise<UserWord[]> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['words'],
  //   });

  //   return user?.words || [];
  // }
}

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

  async getAllWords(
    page = 1,
    size = 20,
  ): Promise<{ data: Word[]; total: number }> {
    const [data, total] = await this.wordRepository.findAndCount({
      skip: (page - 1) * size,
      take: size,
      order: { id: 'ASC' },
    });

    return { data, total };
  }

  async getUnlearnedWords(
    userId: number,
    page = 1,
    size = 20,
  ): Promise<{ data: Word[]; total: number }> {
    const learnedWordIds = await this.userWordRepository.find({
      where: { user: { id: userId }, isLearned: true },
      relations: ['word'],
      select: { word: { id: true } },
    });

    const learnedIds = learnedWordIds.map((uw) => uw.word.id);

    const [data, total] = await this.wordRepository.findAndCount({
      where: learnedIds.length ? { id: Not(In(learnedIds)) } : {},
      skip: (page - 1) * size,
      take: size,
      order: { id: 'ASC' },
    });

    return { data, total };
  }

  async getLearnedWords(
    userId: number,
    page = 1,
    limit = 20,
  ): Promise<{ data: Word[]; total: number }> {
    const [userWords, total] = await this.userWordRepository.findAndCount({
      where: { user: { id: userId }, isLearned: true },
      relations: ['word'],
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'ASC' },
    });

    const data = userWords.map((uw) => uw.word);

    return { data, total };
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

  async insertWordsIfEmpty() {
    // const count = await this.wordRepository.count();
    // if (count > 0) return;

    // const createdWords = this.wordRepository.create(words);
    // await this.wordRepository.save(createdWords);
    await this.wordRepository.clear();
  }
}

var words = [];

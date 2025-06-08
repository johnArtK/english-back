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
    const count = await this.wordRepository.count();
    if (count > 0) return;

    const createdWords = this.wordRepository.create(words);
    await this.wordRepository.save(createdWords);

    console.log(`✅ Inserted ${createdWords.length} words into database.`);
  }
}

var words = [
  {
    id: 5,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 6,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 7,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 8,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 9,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 10,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 11,
    value: 'across',
    translation: 'через',
  },
  {
    id: 12,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 13,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 14,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 15,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 16,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 17,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 18,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 19,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 20,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 21,
    value: 'after',
    translation: 'после',
  },
  {
    id: 22,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 23,
    value: 'against',
    translation: 'против',
  },
  {
    id: 24,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 25,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 26,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 27,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 28,
    value: 'all',
    translation: 'все',
  },
  {
    id: 29,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 30,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 31,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 32,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 33,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 34,
    value: 'also',
    translation: 'также',
  },
  {
    id: 35,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 36,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 37,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 38,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 39,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 40,
    value: 'and',
    translation: 'и',
  },
  {
    id: 41,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 42,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 43,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 44,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 45,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 46,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 47,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 48,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 49,
    value: 'area',
    translation: 'область',
  },
  {
    id: 50,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 51,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 52,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 53,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 54,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 55,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 56,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 57,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 58,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 59,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 60,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 61,
    value: 'across',
    translation: 'через',
  },
  {
    id: 62,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 63,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 64,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 65,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 66,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 67,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 68,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 69,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 70,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 71,
    value: 'after',
    translation: 'после',
  },
  {
    id: 72,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 73,
    value: 'against',
    translation: 'против',
  },
  {
    id: 74,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 75,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 76,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 77,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 78,
    value: 'all',
    translation: 'все',
  },
  {
    id: 79,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 80,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 81,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 82,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 83,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 84,
    value: 'also',
    translation: 'также',
  },
  {
    id: 85,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 86,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 87,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 88,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 89,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 90,
    value: 'and',
    translation: 'и',
  },
  {
    id: 91,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 92,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 93,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 94,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 95,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 96,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 97,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 98,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 99,
    value: 'area',
    translation: 'область',
  },
  {
    id: 100,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 101,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 102,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 103,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 104,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 105,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 106,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 107,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 108,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 109,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 110,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 111,
    value: 'across',
    translation: 'через',
  },
  {
    id: 112,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 113,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 114,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 115,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 116,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 117,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 118,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 119,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 120,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 121,
    value: 'after',
    translation: 'после',
  },
  {
    id: 122,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 123,
    value: 'against',
    translation: 'против',
  },
  {
    id: 124,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 125,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 126,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 127,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 128,
    value: 'all',
    translation: 'все',
  },
  {
    id: 129,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 130,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 131,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 132,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 133,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 134,
    value: 'also',
    translation: 'также',
  },
  {
    id: 135,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 136,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 137,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 138,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 139,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 140,
    value: 'and',
    translation: 'и',
  },
  {
    id: 141,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 142,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 143,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 144,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 145,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 146,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 147,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 148,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 149,
    value: 'area',
    translation: 'область',
  },
  {
    id: 150,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 151,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 152,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 153,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 154,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 155,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 156,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 157,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 158,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 159,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 160,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 161,
    value: 'across',
    translation: 'через',
  },
  {
    id: 162,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 163,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 164,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 165,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 166,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 167,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 168,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 169,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 170,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 171,
    value: 'after',
    translation: 'после',
  },
  {
    id: 172,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 173,
    value: 'against',
    translation: 'против',
  },
  {
    id: 174,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 175,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 176,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 177,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 178,
    value: 'all',
    translation: 'все',
  },
  {
    id: 179,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 180,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 181,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 182,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 183,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 184,
    value: 'also',
    translation: 'также',
  },
  {
    id: 185,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 186,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 187,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 188,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 189,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 190,
    value: 'and',
    translation: 'и',
  },
  {
    id: 191,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 192,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 193,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 194,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 195,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 196,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 197,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 198,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 199,
    value: 'area',
    translation: 'область',
  },
  {
    id: 200,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 201,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 202,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 203,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 204,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 205,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 206,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 207,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 208,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 209,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 210,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 211,
    value: 'across',
    translation: 'через',
  },
  {
    id: 212,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 213,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 214,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 215,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 216,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 217,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 218,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 219,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 220,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 221,
    value: 'after',
    translation: 'после',
  },
  {
    id: 222,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 223,
    value: 'against',
    translation: 'против',
  },
  {
    id: 224,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 225,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 226,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 227,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 228,
    value: 'all',
    translation: 'все',
  },
  {
    id: 229,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 230,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 231,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 232,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 233,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 234,
    value: 'also',
    translation: 'также',
  },
  {
    id: 235,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 236,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 237,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 238,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 239,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 240,
    value: 'and',
    translation: 'и',
  },
  {
    id: 241,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 242,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 243,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 244,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 245,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 246,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 247,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 248,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 249,
    value: 'area',
    translation: 'область',
  },
  {
    id: 250,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 251,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 252,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 253,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 254,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 255,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 256,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 257,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 258,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 259,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 260,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 261,
    value: 'across',
    translation: 'через',
  },
  {
    id: 262,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 263,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 264,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 265,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 266,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 267,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 268,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 269,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 270,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 271,
    value: 'after',
    translation: 'после',
  },
  {
    id: 272,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 273,
    value: 'against',
    translation: 'против',
  },
  {
    id: 274,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 275,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 276,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 277,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 278,
    value: 'all',
    translation: 'все',
  },
  {
    id: 279,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 280,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 281,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 282,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 283,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 284,
    value: 'also',
    translation: 'также',
  },
  {
    id: 285,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 286,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 287,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 288,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 289,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 290,
    value: 'and',
    translation: 'и',
  },
  {
    id: 291,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 292,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 293,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 294,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 295,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 296,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 297,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 298,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 299,
    value: 'area',
    translation: 'область',
  },
  {
    id: 300,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 301,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 302,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 303,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 304,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 305,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 306,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 307,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 308,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 309,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 310,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 311,
    value: 'across',
    translation: 'через',
  },
  {
    id: 312,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 313,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 314,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 315,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 316,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 317,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 318,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 319,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 320,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 321,
    value: 'after',
    translation: 'после',
  },
  {
    id: 322,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 323,
    value: 'against',
    translation: 'против',
  },
  {
    id: 324,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 325,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 326,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 327,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 328,
    value: 'all',
    translation: 'все',
  },
  {
    id: 329,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 330,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 331,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 332,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 333,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 334,
    value: 'also',
    translation: 'также',
  },
  {
    id: 335,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 336,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 337,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 338,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 339,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 340,
    value: 'and',
    translation: 'и',
  },
  {
    id: 341,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 342,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 343,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 344,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 345,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 346,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 347,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 348,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 349,
    value: 'area',
    translation: 'область',
  },
  {
    id: 350,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 351,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 352,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 353,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 354,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 355,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 356,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 357,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 358,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 359,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 360,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 361,
    value: 'across',
    translation: 'через',
  },
  {
    id: 362,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 363,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 364,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 365,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 366,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 367,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 368,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 369,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 370,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 371,
    value: 'after',
    translation: 'после',
  },
  {
    id: 372,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 373,
    value: 'against',
    translation: 'против',
  },
  {
    id: 374,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 375,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 376,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 377,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 378,
    value: 'all',
    translation: 'все',
  },
  {
    id: 379,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 380,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 381,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 382,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 383,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 384,
    value: 'also',
    translation: 'также',
  },
  {
    id: 385,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 386,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 387,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 388,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 389,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 390,
    value: 'and',
    translation: 'и',
  },
  {
    id: 391,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 392,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 393,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 394,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 395,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 396,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 397,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 398,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 399,
    value: 'area',
    translation: 'область',
  },
  {
    id: 400,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 401,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 402,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 403,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 404,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 405,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 406,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 407,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 408,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 409,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 410,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 411,
    value: 'across',
    translation: 'через',
  },
  {
    id: 412,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 413,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 414,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 415,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 416,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 417,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 418,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 419,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 420,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 421,
    value: 'after',
    translation: 'после',
  },
  {
    id: 422,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 423,
    value: 'against',
    translation: 'против',
  },
  {
    id: 424,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 425,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 426,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 427,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 428,
    value: 'all',
    translation: 'все',
  },
  {
    id: 429,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 430,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 431,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 432,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 433,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 434,
    value: 'also',
    translation: 'также',
  },
  {
    id: 435,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 436,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 437,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 438,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 439,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 440,
    value: 'and',
    translation: 'и',
  },
  {
    id: 441,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 442,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 443,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 444,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 445,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 446,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 447,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 448,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 449,
    value: 'area',
    translation: 'область',
  },
  {
    id: 450,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 451,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 452,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 453,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 454,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 455,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 456,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 457,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 458,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 459,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 460,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 461,
    value: 'across',
    translation: 'через',
  },
  {
    id: 462,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 463,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 464,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 465,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 466,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 467,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 468,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 469,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 470,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 471,
    value: 'after',
    translation: 'после',
  },
  {
    id: 472,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 473,
    value: 'against',
    translation: 'против',
  },
  {
    id: 474,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 475,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 476,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 477,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 478,
    value: 'all',
    translation: 'все',
  },
  {
    id: 479,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 480,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 481,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 482,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 483,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 484,
    value: 'also',
    translation: 'также',
  },
  {
    id: 485,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 486,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 487,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 488,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 489,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 490,
    value: 'and',
    translation: 'и',
  },
  {
    id: 491,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 492,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 493,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 494,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 495,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 496,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 497,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 498,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 499,
    value: 'area',
    translation: 'область',
  },
  {
    id: 500,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 501,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 502,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 503,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 504,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 505,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 506,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 507,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 508,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 509,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 510,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 511,
    value: 'across',
    translation: 'через',
  },
  {
    id: 512,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 513,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 514,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 515,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 516,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 517,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 518,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 519,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 520,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 521,
    value: 'after',
    translation: 'после',
  },
  {
    id: 522,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 523,
    value: 'against',
    translation: 'против',
  },
  {
    id: 524,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 525,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 526,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 527,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 528,
    value: 'all',
    translation: 'все',
  },
  {
    id: 529,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 530,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 531,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 532,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 533,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 534,
    value: 'also',
    translation: 'также',
  },
  {
    id: 535,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 536,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 537,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 538,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 539,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 540,
    value: 'and',
    translation: 'и',
  },
  {
    id: 541,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 542,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 543,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 544,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 545,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 546,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 547,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 548,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 549,
    value: 'area',
    translation: 'область',
  },
  {
    id: 550,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 551,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 552,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 553,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 554,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 555,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 556,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 557,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 558,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 559,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 560,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 561,
    value: 'across',
    translation: 'через',
  },
  {
    id: 562,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 563,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 564,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 565,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 566,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 567,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 568,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 569,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 570,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 571,
    value: 'after',
    translation: 'после',
  },
  {
    id: 572,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 573,
    value: 'against',
    translation: 'против',
  },
  {
    id: 574,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 575,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 576,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 577,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 578,
    value: 'all',
    translation: 'все',
  },
  {
    id: 579,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 580,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 581,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 582,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 583,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 584,
    value: 'also',
    translation: 'также',
  },
  {
    id: 585,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 586,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 587,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 588,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 589,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 590,
    value: 'and',
    translation: 'и',
  },
  {
    id: 591,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 592,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 593,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 594,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 595,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 596,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 597,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 598,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 599,
    value: 'area',
    translation: 'область',
  },
  {
    id: 600,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 601,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 602,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 603,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 604,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 605,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 606,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 607,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 608,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 609,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 610,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 611,
    value: 'across',
    translation: 'через',
  },
  {
    id: 612,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 613,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 614,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 615,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 616,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 617,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 618,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 619,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 620,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 621,
    value: 'after',
    translation: 'после',
  },
  {
    id: 622,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 623,
    value: 'against',
    translation: 'против',
  },
  {
    id: 624,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 625,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 626,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 627,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 628,
    value: 'all',
    translation: 'все',
  },
  {
    id: 629,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 630,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 631,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 632,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 633,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 634,
    value: 'also',
    translation: 'также',
  },
  {
    id: 635,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 636,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 637,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 638,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 639,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 640,
    value: 'and',
    translation: 'и',
  },
  {
    id: 641,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 642,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 643,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 644,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 645,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 646,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 647,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 648,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 649,
    value: 'area',
    translation: 'область',
  },
  {
    id: 650,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 651,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 652,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 653,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 654,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 655,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 656,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 657,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 658,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 659,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 660,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 661,
    value: 'across',
    translation: 'через',
  },
  {
    id: 662,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 663,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 664,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 665,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 666,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 667,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 668,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 669,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 670,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 671,
    value: 'after',
    translation: 'после',
  },
  {
    id: 672,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 673,
    value: 'against',
    translation: 'против',
  },
  {
    id: 674,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 675,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 676,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 677,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 678,
    value: 'all',
    translation: 'все',
  },
  {
    id: 679,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 680,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 681,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 682,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 683,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 684,
    value: 'also',
    translation: 'также',
  },
  {
    id: 685,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 686,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 687,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 688,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 689,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 690,
    value: 'and',
    translation: 'и',
  },
  {
    id: 691,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 692,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 693,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 694,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 695,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 696,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 697,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 698,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 699,
    value: 'area',
    translation: 'область',
  },
  {
    id: 700,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 701,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 702,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 703,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 704,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 705,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 706,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 707,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 708,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 709,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 710,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 711,
    value: 'across',
    translation: 'через',
  },
  {
    id: 712,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 713,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 714,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 715,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 716,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 717,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 718,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 719,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 720,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 721,
    value: 'after',
    translation: 'после',
  },
  {
    id: 722,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 723,
    value: 'against',
    translation: 'против',
  },
  {
    id: 724,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 725,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 726,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 727,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 728,
    value: 'all',
    translation: 'все',
  },
  {
    id: 729,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 730,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 731,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 732,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 733,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 734,
    value: 'also',
    translation: 'также',
  },
  {
    id: 735,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 736,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 737,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 738,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 739,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 740,
    value: 'and',
    translation: 'и',
  },
  {
    id: 741,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 742,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 743,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 744,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 745,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 746,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 747,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 748,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 749,
    value: 'area',
    translation: 'область',
  },
  {
    id: 750,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 751,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 752,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 753,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 754,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 755,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 756,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 757,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 758,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 759,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 760,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 761,
    value: 'across',
    translation: 'через',
  },
  {
    id: 762,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 763,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 764,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 765,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 766,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 767,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 768,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 769,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 770,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 771,
    value: 'after',
    translation: 'после',
  },
  {
    id: 772,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 773,
    value: 'against',
    translation: 'против',
  },
  {
    id: 774,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 775,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 776,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 777,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 778,
    value: 'all',
    translation: 'все',
  },
  {
    id: 779,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 780,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 781,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 782,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 783,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 784,
    value: 'also',
    translation: 'также',
  },
  {
    id: 785,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 786,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 787,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 788,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 789,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 790,
    value: 'and',
    translation: 'и',
  },
  {
    id: 791,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 792,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 793,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 794,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 795,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 796,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 797,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 798,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 799,
    value: 'area',
    translation: 'область',
  },
  {
    id: 800,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 801,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 802,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 803,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 804,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 805,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 806,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 807,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 808,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 809,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 810,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 811,
    value: 'across',
    translation: 'через',
  },
  {
    id: 812,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 813,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 814,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 815,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 816,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 817,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 818,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 819,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 820,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 821,
    value: 'after',
    translation: 'после',
  },
  {
    id: 822,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 823,
    value: 'against',
    translation: 'против',
  },
  {
    id: 824,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 825,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 826,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 827,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 828,
    value: 'all',
    translation: 'все',
  },
  {
    id: 829,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 830,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 831,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 832,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 833,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 834,
    value: 'also',
    translation: 'также',
  },
  {
    id: 835,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 836,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 837,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 838,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 839,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 840,
    value: 'and',
    translation: 'и',
  },
  {
    id: 841,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 842,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 843,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 844,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 845,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 846,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 847,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 848,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 849,
    value: 'area',
    translation: 'область',
  },
  {
    id: 850,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 851,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 852,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 853,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 854,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 855,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 856,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 857,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 858,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 859,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 860,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 861,
    value: 'across',
    translation: 'через',
  },
  {
    id: 862,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 863,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 864,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 865,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 866,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 867,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 868,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 869,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 870,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 871,
    value: 'after',
    translation: 'после',
  },
  {
    id: 872,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 873,
    value: 'against',
    translation: 'против',
  },
  {
    id: 874,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 875,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 876,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 877,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 878,
    value: 'all',
    translation: 'все',
  },
  {
    id: 879,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 880,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 881,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 882,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 883,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 884,
    value: 'also',
    translation: 'также',
  },
  {
    id: 885,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 886,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 887,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 888,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 889,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 890,
    value: 'and',
    translation: 'и',
  },
  {
    id: 891,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 892,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 893,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 894,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 895,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 896,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 897,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 898,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 899,
    value: 'area',
    translation: 'область',
  },
  {
    id: 900,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 901,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 902,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 903,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 904,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 905,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 906,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 907,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 908,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 909,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 910,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 911,
    value: 'across',
    translation: 'через',
  },
  {
    id: 912,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 913,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 914,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 915,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 916,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 917,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 918,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 919,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 920,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 921,
    value: 'after',
    translation: 'после',
  },
  {
    id: 922,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 923,
    value: 'against',
    translation: 'против',
  },
  {
    id: 924,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 925,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 926,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 927,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 928,
    value: 'all',
    translation: 'все',
  },
  {
    id: 929,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 930,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 931,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 932,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 933,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 934,
    value: 'also',
    translation: 'также',
  },
  {
    id: 935,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 936,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 937,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 938,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 939,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 940,
    value: 'and',
    translation: 'и',
  },
  {
    id: 941,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 942,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 943,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 944,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 945,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 946,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 947,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 948,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 949,
    value: 'area',
    translation: 'область',
  },
  {
    id: 950,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 951,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 952,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 953,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 954,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 955,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 956,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 957,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 958,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 959,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 960,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 961,
    value: 'across',
    translation: 'через',
  },
  {
    id: 962,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 963,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 964,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 965,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 966,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 967,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 968,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 969,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 970,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 971,
    value: 'after',
    translation: 'после',
  },
  {
    id: 972,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 973,
    value: 'against',
    translation: 'против',
  },
  {
    id: 974,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 975,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 976,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 977,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 978,
    value: 'all',
    translation: 'все',
  },
  {
    id: 979,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 980,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 981,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 982,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 983,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 984,
    value: 'also',
    translation: 'также',
  },
  {
    id: 985,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 986,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 987,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 988,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 989,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 990,
    value: 'and',
    translation: 'и',
  },
  {
    id: 991,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 992,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 993,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 994,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 995,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 996,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 997,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 998,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 999,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1000,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1001,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1002,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1003,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1004,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1005,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1006,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1007,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1008,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1009,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1010,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1011,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1012,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1013,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1014,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1015,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1016,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1017,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1018,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1019,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1020,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1021,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1022,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1023,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1024,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1025,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1026,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1027,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1028,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1029,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1030,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1031,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1032,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1033,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1034,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1035,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1036,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1037,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1038,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1039,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1040,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1041,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1042,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1043,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1044,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1045,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1046,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1047,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1048,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1049,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1050,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1051,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1052,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1053,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1054,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1055,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1056,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1057,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1058,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1059,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1060,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1061,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1062,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1063,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1064,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1065,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1066,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1067,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1068,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1069,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1070,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1071,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1072,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1073,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1074,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1075,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1076,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1077,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1078,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1079,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1080,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1081,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1082,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1083,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1084,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1085,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1086,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1087,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1088,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1089,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1090,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1091,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1092,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1093,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1094,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1095,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1096,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1097,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1098,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1099,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1100,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1101,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1102,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1103,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1104,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1105,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1106,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1107,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1108,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1109,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1110,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1111,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1112,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1113,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1114,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1115,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1116,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1117,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1118,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1119,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1120,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1121,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1122,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1123,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1124,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1125,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1126,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1127,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1128,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1129,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1130,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1131,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1132,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1133,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1134,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1135,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1136,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1137,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1138,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1139,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1140,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1141,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1142,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1143,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1144,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1145,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1146,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1147,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1148,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1149,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1150,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1151,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1152,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1153,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1154,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1155,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1156,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1157,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1158,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1159,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1160,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1161,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1162,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1163,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1164,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1165,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1166,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1167,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1168,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1169,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1170,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1171,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1172,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1173,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1174,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1175,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1176,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1177,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1178,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1179,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1180,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1181,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1182,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1183,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1184,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1185,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1186,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1187,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1188,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1189,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1190,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1191,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1192,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1193,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1194,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1195,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1196,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1197,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1198,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1199,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1200,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1201,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1202,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1203,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1204,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1205,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1206,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1207,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1208,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1209,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1210,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1211,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1212,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1213,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1214,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1215,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1216,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1217,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1218,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1219,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1220,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1221,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1222,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1223,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1224,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1225,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1226,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1227,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1228,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1229,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1230,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1231,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1232,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1233,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1234,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1235,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1236,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1237,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1238,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1239,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1240,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1241,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1242,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1243,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1244,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1245,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1246,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1247,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1248,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1249,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1250,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1251,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1252,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1253,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1254,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1255,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1256,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1257,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1258,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1259,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1260,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1261,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1262,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1263,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1264,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1265,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1266,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1267,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1268,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1269,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1270,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1271,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1272,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1273,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1274,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1275,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1276,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1277,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1278,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1279,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1280,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1281,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1282,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1283,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1284,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1285,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1286,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1287,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1288,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1289,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1290,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1291,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1292,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1293,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1294,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1295,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1296,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1297,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1298,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1299,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1300,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1301,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1302,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1303,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1304,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1305,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1306,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1307,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1308,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1309,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1310,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1311,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1312,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1313,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1314,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1315,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1316,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1317,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1318,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1319,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1320,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1321,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1322,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1323,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1324,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1325,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1326,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1327,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1328,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1329,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1330,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1331,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1332,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1333,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1334,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1335,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1336,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1337,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1338,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1339,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1340,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1341,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1342,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1343,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1344,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1345,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1346,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1347,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1348,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1349,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1350,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1351,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1352,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1353,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1354,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1355,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1356,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1357,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1358,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1359,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1360,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1361,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1362,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1363,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1364,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1365,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1366,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1367,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1368,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1369,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1370,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1371,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1372,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1373,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1374,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1375,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1376,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1377,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1378,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1379,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1380,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1381,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1382,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1383,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1384,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1385,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1386,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1387,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1388,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1389,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1390,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1391,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1392,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1393,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1394,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1395,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1396,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1397,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1398,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1399,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1400,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1401,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1402,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1403,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1404,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1405,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1406,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1407,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1408,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1409,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1410,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1411,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1412,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1413,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1414,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1415,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1416,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1417,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1418,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1419,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1420,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1421,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1422,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1423,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1424,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1425,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1426,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1427,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1428,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1429,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1430,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1431,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1432,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1433,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1434,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1435,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1436,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1437,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1438,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1439,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1440,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1441,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1442,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1443,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1444,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1445,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1446,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1447,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1448,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1449,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1450,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1451,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1452,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1453,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1454,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1455,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1456,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1457,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1458,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1459,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1460,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1461,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1462,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1463,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1464,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1465,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1466,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1467,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1468,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1469,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1470,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1471,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1472,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1473,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1474,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1475,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1476,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1477,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1478,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1479,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1480,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1481,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1482,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1483,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1484,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1485,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1486,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1487,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1488,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1489,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1490,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1491,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1492,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1493,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1494,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1495,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1496,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1497,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1498,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1499,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1500,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1501,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1502,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1503,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1504,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1505,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1506,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1507,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1508,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1509,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1510,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1511,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1512,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1513,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1514,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1515,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1516,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1517,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1518,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1519,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1520,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1521,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1522,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1523,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1524,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1525,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1526,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1527,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1528,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1529,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1530,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1531,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1532,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1533,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1534,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1535,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1536,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1537,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1538,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1539,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1540,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1541,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1542,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1543,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1544,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1545,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1546,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1547,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1548,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1549,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1550,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1551,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1552,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1553,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1554,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1555,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1556,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1557,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1558,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1559,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1560,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1561,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1562,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1563,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1564,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1565,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1566,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1567,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1568,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1569,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1570,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1571,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1572,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1573,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1574,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1575,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1576,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1577,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1578,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1579,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1580,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1581,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1582,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1583,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1584,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1585,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1586,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1587,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1588,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1589,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1590,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1591,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1592,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1593,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1594,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1595,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1596,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1597,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1598,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1599,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1600,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1601,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1602,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1603,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1604,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1605,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1606,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1607,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1608,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1609,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1610,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1611,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1612,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1613,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1614,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1615,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1616,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1617,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1618,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1619,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1620,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1621,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1622,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1623,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1624,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1625,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1626,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1627,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1628,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1629,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1630,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1631,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1632,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1633,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1634,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1635,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1636,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1637,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1638,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1639,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1640,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1641,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1642,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1643,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1644,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1645,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1646,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1647,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1648,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1649,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1650,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1651,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1652,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1653,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1654,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1655,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1656,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1657,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1658,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1659,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1660,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1661,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1662,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1663,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1664,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1665,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1666,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1667,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1668,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1669,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1670,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1671,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1672,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1673,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1674,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1675,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1676,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1677,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1678,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1679,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1680,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1681,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1682,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1683,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1684,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1685,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1686,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1687,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1688,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1689,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1690,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1691,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1692,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1693,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1694,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1695,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1696,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1697,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1698,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1699,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1700,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1701,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1702,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1703,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1704,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1705,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1706,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1707,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1708,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1709,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1710,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1711,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1712,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1713,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1714,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1715,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1716,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1717,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1718,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1719,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1720,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1721,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1722,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1723,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1724,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1725,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1726,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1727,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1728,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1729,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1730,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1731,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1732,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1733,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1734,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1735,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1736,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1737,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1738,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1739,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1740,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1741,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1742,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1743,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1744,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1745,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1746,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1747,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1748,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1749,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1750,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1751,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1752,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1753,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1754,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1755,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1756,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1757,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1758,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1759,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1760,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1761,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1762,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1763,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1764,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1765,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1766,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1767,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1768,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1769,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1770,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1771,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1772,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1773,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1774,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1775,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1776,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1777,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1778,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1779,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1780,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1781,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1782,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1783,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1784,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1785,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1786,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1787,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1788,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1789,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1790,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1791,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1792,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1793,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1794,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1795,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1796,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1797,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1798,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1799,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1800,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1801,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1802,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1803,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1804,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1805,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1806,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1807,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1808,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1809,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1810,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1811,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1812,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1813,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1814,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1815,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1816,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1817,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1818,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1819,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1820,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1821,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1822,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1823,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1824,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1825,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1826,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1827,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1828,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1829,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1830,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1831,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1832,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1833,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1834,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1835,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1836,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1837,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1838,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1839,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1840,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1841,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1842,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1843,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1844,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1845,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1846,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1847,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1848,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1849,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1850,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1851,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1852,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1853,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1854,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1855,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1856,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1857,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1858,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1859,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1860,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1861,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1862,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1863,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1864,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1865,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1866,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1867,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1868,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1869,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1870,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1871,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1872,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1873,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1874,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1875,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1876,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1877,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1878,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1879,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1880,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1881,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1882,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1883,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1884,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1885,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1886,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1887,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1888,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1889,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1890,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1891,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1892,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1893,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1894,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1895,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1896,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1897,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1898,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1899,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1900,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1901,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1902,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1903,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1904,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1905,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1906,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1907,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1908,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1909,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1910,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1911,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1912,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1913,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1914,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1915,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1916,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1917,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1918,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1919,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1920,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1921,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1922,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1923,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1924,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1925,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1926,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1927,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1928,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1929,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1930,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1931,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1932,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1933,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1934,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1935,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1936,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1937,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1938,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1939,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1940,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1941,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1942,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1943,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1944,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1945,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1946,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1947,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1948,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1949,
    value: 'area',
    translation: 'область',
  },
  {
    id: 1950,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 1951,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 1952,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 1953,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 1954,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 1955,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 1956,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 1957,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 1958,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 1959,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 1960,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 1961,
    value: 'across',
    translation: 'через',
  },
  {
    id: 1962,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 1963,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 1964,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 1965,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 1966,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 1967,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 1968,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 1969,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 1970,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 1971,
    value: 'after',
    translation: 'после',
  },
  {
    id: 1972,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 1973,
    value: 'against',
    translation: 'против',
  },
  {
    id: 1974,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 1975,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 1976,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 1977,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 1978,
    value: 'all',
    translation: 'все',
  },
  {
    id: 1979,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 1980,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 1981,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 1982,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 1983,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 1984,
    value: 'also',
    translation: 'также',
  },
  {
    id: 1985,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 1986,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 1987,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 1988,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 1989,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 1990,
    value: 'and',
    translation: 'и',
  },
  {
    id: 1991,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 1992,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 1993,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 1994,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 1995,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 1996,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 1997,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 1998,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 1999,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2000,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2001,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2002,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2003,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2004,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2005,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2006,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2007,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2008,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2009,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2010,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2011,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2012,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2013,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2014,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2015,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2016,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2017,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2018,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2019,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2020,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2021,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2022,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2023,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2024,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2025,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2026,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2027,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2028,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2029,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2030,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2031,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2032,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2033,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2034,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2035,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2036,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2037,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2038,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2039,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2040,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2041,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2042,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2043,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2044,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2045,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2046,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2047,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2048,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2049,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2050,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2051,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2052,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2053,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2054,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2055,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2056,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2057,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2058,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2059,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2060,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2061,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2062,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2063,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2064,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2065,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2066,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2067,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2068,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2069,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2070,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2071,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2072,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2073,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2074,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2075,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2076,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2077,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2078,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2079,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2080,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2081,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2082,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2083,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2084,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2085,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2086,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2087,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2088,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2089,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2090,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2091,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2092,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2093,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2094,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2095,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2096,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2097,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2098,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2099,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2100,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2101,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2102,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2103,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2104,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2105,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2106,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2107,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2108,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2109,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2110,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2111,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2112,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2113,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2114,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2115,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2116,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2117,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2118,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2119,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2120,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2121,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2122,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2123,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2124,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2125,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2126,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2127,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2128,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2129,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2130,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2131,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2132,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2133,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2134,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2135,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2136,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2137,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2138,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2139,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2140,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2141,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2142,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2143,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2144,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2145,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2146,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2147,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2148,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2149,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2150,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2151,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2152,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2153,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2154,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2155,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2156,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2157,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2158,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2159,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2160,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2161,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2162,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2163,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2164,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2165,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2166,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2167,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2168,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2169,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2170,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2171,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2172,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2173,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2174,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2175,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2176,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2177,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2178,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2179,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2180,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2181,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2182,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2183,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2184,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2185,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2186,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2187,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2188,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2189,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2190,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2191,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2192,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2193,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2194,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2195,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2196,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2197,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2198,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2199,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2200,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2201,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2202,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2203,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2204,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2205,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2206,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2207,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2208,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2209,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2210,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2211,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2212,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2213,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2214,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2215,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2216,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2217,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2218,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2219,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2220,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2221,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2222,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2223,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2224,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2225,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2226,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2227,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2228,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2229,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2230,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2231,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2232,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2233,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2234,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2235,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2236,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2237,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2238,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2239,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2240,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2241,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2242,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2243,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2244,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2245,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2246,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2247,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2248,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2249,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2250,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2251,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2252,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2253,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2254,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2255,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2256,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2257,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2258,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2259,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2260,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2261,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2262,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2263,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2264,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2265,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2266,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2267,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2268,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2269,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2270,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2271,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2272,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2273,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2274,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2275,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2276,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2277,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2278,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2279,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2280,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2281,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2282,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2283,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2284,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2285,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2286,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2287,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2288,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2289,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2290,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2291,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2292,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2293,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2294,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2295,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2296,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2297,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2298,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2299,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2300,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2301,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2302,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2303,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2304,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2305,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2306,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2307,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2308,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2309,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2310,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2311,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2312,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2313,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2314,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2315,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2316,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2317,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2318,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2319,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2320,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2321,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2322,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2323,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2324,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2325,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2326,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2327,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2328,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2329,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2330,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2331,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2332,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2333,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2334,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2335,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2336,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2337,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2338,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2339,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2340,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2341,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2342,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2343,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2344,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2345,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2346,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2347,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2348,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2349,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2350,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2351,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2352,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2353,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2354,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2355,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2356,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2357,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2358,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2359,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2360,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2361,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2362,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2363,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2364,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2365,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2366,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2367,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2368,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2369,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2370,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2371,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2372,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2373,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2374,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2375,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2376,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2377,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2378,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2379,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2380,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2381,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2382,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2383,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2384,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2385,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2386,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2387,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2388,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2389,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2390,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2391,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2392,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2393,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2394,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2395,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2396,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2397,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2398,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2399,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2400,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2401,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2402,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2403,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2404,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2405,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2406,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2407,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2408,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2409,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2410,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2411,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2412,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2413,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2414,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2415,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2416,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2417,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2418,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2419,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2420,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2421,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2422,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2423,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2424,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2425,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2426,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2427,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2428,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2429,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2430,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2431,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2432,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2433,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2434,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2435,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2436,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2437,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2438,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2439,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2440,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2441,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2442,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2443,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2444,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2445,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2446,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2447,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2448,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2449,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2450,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2451,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2452,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2453,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2454,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2455,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2456,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2457,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2458,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2459,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2460,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2461,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2462,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2463,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2464,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2465,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2466,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2467,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2468,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2469,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2470,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2471,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2472,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2473,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2474,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2475,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2476,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2477,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2478,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2479,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2480,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2481,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2482,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2483,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2484,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2485,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2486,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2487,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2488,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2489,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2490,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2491,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2492,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2493,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2494,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2495,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2496,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2497,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2498,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2499,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2500,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2501,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2502,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2503,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2504,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2505,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2506,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2507,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2508,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2509,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2510,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2511,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2512,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2513,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2514,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2515,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2516,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2517,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2518,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2519,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2520,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2521,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2522,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2523,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2524,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2525,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2526,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2527,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2528,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2529,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2530,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2531,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2532,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2533,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2534,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2535,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2536,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2537,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2538,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2539,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2540,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2541,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2542,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2543,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2544,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2545,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2546,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2547,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2548,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2549,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2550,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2551,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2552,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2553,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2554,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2555,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2556,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2557,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2558,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2559,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2560,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2561,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2562,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2563,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2564,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2565,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2566,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2567,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2568,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2569,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2570,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2571,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2572,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2573,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2574,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2575,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2576,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2577,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2578,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2579,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2580,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2581,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2582,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2583,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2584,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2585,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2586,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2587,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2588,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2589,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2590,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2591,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2592,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2593,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2594,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2595,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2596,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2597,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2598,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2599,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2600,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2601,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2602,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2603,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2604,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2605,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2606,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2607,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2608,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2609,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2610,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2611,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2612,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2613,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2614,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2615,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2616,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2617,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2618,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2619,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2620,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2621,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2622,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2623,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2624,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2625,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2626,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2627,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2628,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2629,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2630,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2631,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2632,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2633,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2634,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2635,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2636,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2637,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2638,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2639,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2640,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2641,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2642,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2643,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2644,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2645,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2646,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2647,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2648,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2649,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2650,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2651,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2652,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2653,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2654,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2655,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2656,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2657,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2658,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2659,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2660,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2661,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2662,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2663,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2664,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2665,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2666,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2667,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2668,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2669,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2670,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2671,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2672,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2673,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2674,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2675,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2676,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2677,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2678,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2679,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2680,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2681,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2682,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2683,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2684,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2685,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2686,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2687,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2688,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2689,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2690,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2691,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2692,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2693,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2694,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2695,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2696,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2697,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2698,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2699,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2700,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2701,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2702,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2703,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2704,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2705,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2706,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2707,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2708,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2709,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2710,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2711,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2712,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2713,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2714,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2715,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2716,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2717,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2718,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2719,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2720,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2721,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2722,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2723,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2724,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2725,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2726,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2727,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2728,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2729,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2730,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2731,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2732,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2733,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2734,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2735,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2736,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2737,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2738,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2739,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2740,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2741,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2742,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2743,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2744,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2745,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2746,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2747,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2748,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2749,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2750,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2751,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2752,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2753,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2754,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2755,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2756,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2757,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2758,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2759,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2760,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2761,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2762,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2763,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2764,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2765,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2766,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2767,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2768,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2769,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2770,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2771,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2772,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2773,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2774,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2775,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2776,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2777,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2778,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2779,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2780,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2781,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2782,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2783,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2784,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2785,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2786,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2787,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2788,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2789,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2790,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2791,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2792,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2793,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2794,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2795,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2796,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2797,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2798,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2799,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2800,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2801,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2802,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2803,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2804,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2805,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2806,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2807,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2808,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2809,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2810,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2811,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2812,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2813,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2814,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2815,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2816,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2817,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2818,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2819,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2820,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2821,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2822,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2823,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2824,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2825,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2826,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2827,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2828,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2829,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2830,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2831,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2832,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2833,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2834,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2835,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2836,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2837,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2838,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2839,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2840,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2841,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2842,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2843,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2844,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2845,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2846,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2847,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2848,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2849,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2850,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2851,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2852,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2853,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2854,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2855,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2856,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2857,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2858,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2859,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2860,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2861,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2862,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2863,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2864,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2865,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2866,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2867,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2868,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2869,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2870,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2871,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2872,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2873,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2874,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2875,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2876,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2877,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2878,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2879,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2880,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2881,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2882,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2883,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2884,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2885,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2886,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2887,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2888,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2889,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2890,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2891,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2892,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2893,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2894,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2895,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2896,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2897,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2898,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2899,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2900,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2901,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2902,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2903,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2904,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2905,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2906,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2907,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2908,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2909,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2910,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2911,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2912,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2913,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2914,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2915,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2916,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2917,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2918,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2919,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2920,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2921,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2922,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2923,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2924,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2925,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2926,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2927,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2928,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2929,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2930,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2931,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2932,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2933,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2934,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2935,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2936,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2937,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2938,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2939,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2940,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2941,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2942,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2943,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2944,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2945,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2946,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2947,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2948,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2949,
    value: 'area',
    translation: 'область',
  },
  {
    id: 2950,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 2951,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 2952,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 2953,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 2954,
    value: 'art',
    translation: 'искусство',
  },
  {
    id: 2955,
    value: 'ability',
    translation: 'способность',
  },
  {
    id: 2956,
    value: 'able',
    translation: 'способный',
  },
  {
    id: 2957,
    value: 'about',
    translation: 'о, около',
  },
  {
    id: 2958,
    value: 'above',
    translation: 'выше',
  },
  {
    id: 2959,
    value: 'accept',
    translation: 'принимать',
  },
  {
    id: 2960,
    value: 'account',
    translation: 'счёт',
  },
  {
    id: 2961,
    value: 'across',
    translation: 'через',
  },
  {
    id: 2962,
    value: 'act',
    translation: 'действовать',
  },
  {
    id: 2963,
    value: 'action',
    translation: 'действие',
  },
  {
    id: 2964,
    value: 'activity',
    translation: 'деятельность',
  },
  {
    id: 2965,
    value: 'actually',
    translation: 'на самом деле',
  },
  {
    id: 2966,
    value: 'add',
    translation: 'добавлять',
  },
  {
    id: 2967,
    value: 'address',
    translation: 'адрес',
  },
  {
    id: 2968,
    value: 'advice',
    translation: 'совет',
  },
  {
    id: 2969,
    value: 'affect',
    translation: 'влиять',
  },
  {
    id: 2970,
    value: 'afraid',
    translation: 'бояться',
  },
  {
    id: 2971,
    value: 'after',
    translation: 'после',
  },
  {
    id: 2972,
    value: 'again',
    translation: 'снова',
  },
  {
    id: 2973,
    value: 'against',
    translation: 'против',
  },
  {
    id: 2974,
    value: 'age',
    translation: 'возраст',
  },
  {
    id: 2975,
    value: 'agency',
    translation: 'агентство',
  },
  {
    id: 2976,
    value: 'agree',
    translation: 'соглашаться',
  },
  {
    id: 2977,
    value: 'air',
    translation: 'воздух',
  },
  {
    id: 2978,
    value: 'all',
    translation: 'все',
  },
  {
    id: 2979,
    value: 'allow',
    translation: 'позволять',
  },
  {
    id: 2980,
    value: 'almost',
    translation: 'почти',
  },
  {
    id: 2981,
    value: 'alone',
    translation: 'один',
  },
  {
    id: 2982,
    value: 'along',
    translation: 'вдоль',
  },
  {
    id: 2983,
    value: 'already',
    translation: 'уже',
  },
  {
    id: 2984,
    value: 'also',
    translation: 'также',
  },
  {
    id: 2985,
    value: 'although',
    translation: 'хотя',
  },
  {
    id: 2986,
    value: 'always',
    translation: 'всегда',
  },
  {
    id: 2987,
    value: 'amazing',
    translation: 'удивительный',
  },
  {
    id: 2988,
    value: 'amount',
    translation: 'количество',
  },
  {
    id: 2989,
    value: 'analysis',
    translation: 'анализ',
  },
  {
    id: 2990,
    value: 'and',
    translation: 'и',
  },
  {
    id: 2991,
    value: 'animal',
    translation: 'животное',
  },
  {
    id: 2992,
    value: 'another',
    translation: 'другой',
  },
  {
    id: 2993,
    value: 'answer',
    translation: 'ответ',
  },
  {
    id: 2994,
    value: 'any',
    translation: 'любой',
  },
  {
    id: 2995,
    value: 'anyone',
    translation: 'кто-нибудь',
  },
  {
    id: 2996,
    value: 'anything',
    translation: 'что-нибудь',
  },
  {
    id: 2997,
    value: 'appear',
    translation: 'появляться',
  },
  {
    id: 2998,
    value: 'apply',
    translation: 'применять',
  },
  {
    id: 2999,
    value: 'area',
    translation: 'область',
  },
  {
    id: 3000,
    value: 'argue',
    translation: 'спорить',
  },
  {
    id: 3001,
    value: 'arm',
    translation: 'рука',
  },
  {
    id: 3002,
    value: 'around',
    translation: 'вокруг',
  },
  {
    id: 3003,
    value: 'arrive',
    translation: 'прибывать',
  },
  {
    id: 3004,
    value: 'art',
    translation: 'искусство',
  },
];

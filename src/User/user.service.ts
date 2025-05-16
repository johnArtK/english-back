import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entitys/user.entity';
import { Word } from 'src/Word/entitys/word.entity';
// import { WordDto } from './dto/word.dto';
// import { Word } from '../Word/entitys/word.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private wordRepository: Repository<Word>,
  ) {}

  async create(user: Partial<User>): Promise<User> {
    return await this.userRepository.save(user);
  }
async createW() {
  const userWords = words3000.map(word => ({
  id: word.id,
  value: word.word,
  translation: word.translation
}));

 await this.wordRepository.insert(userWords);
}


//

//   async findByEmail(email: string): Promise<User | null> {
//     return this.userRepository.findOneBy({ email });
//   }

//   async findById(id: number): Promise<User | null> {
//     return await this.userRepository.findOne({ where: { id } });
//   }

  // async addUserWord(userId: number, newWord: WordDto): Promise<Word> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['words'],
  //   });

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   const word = new Word();
  //   word.value = newWord.value;
  //   word.userId = user.id;

  //   return this.userRepository.manager.save(word);
  // }

  // async deleteUserWord(userId: number, wordId: number) {
  //   const word = await this.userRepository.manager.findOne(Word, {
  //     where: { id: wordId, userId },
  //   });

  //   if (!word) {
  //     throw new Error('Word not found or does not belong to the user');
  //   }

  //   return await this.userRepository.manager.remove(Word, word);
  // }

  // async getUserWords(userId: number): Promise<Word[]> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['words'],
  //   });

  //   return user?.words || [];
  // }
}



var words3000 = [
  {
    id: 1,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2,
    word: "able",
    translation: "способный",
  },
  {
    id: 3,
    word: "about",
    translation: "о, около",
  },
  {
    id: 4,
    word: "above",
    translation: "выше",
  },
  {
    id: 5,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 6,
    word: "account",
    translation: "счёт",
  },
  {
    id: 7,
    word: "across",
    translation: "через",
  },
  {
    id: 8,
    word: "act",
    translation: "действовать",
  },
  {
    id: 9,
    word: "action",
    translation: "действие",
  },
  {
    id: 10,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 11,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 12,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 13,
    word: "address",
    translation: "адрес",
  },
  {
    id: 14,
    word: "advice",
    translation: "совет",
  },
  {
    id: 15,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 16,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 17,
    word: "after",
    translation: "после",
  },
  {
    id: 18,
    word: "again",
    translation: "снова",
  },
  {
    id: 19,
    word: "against",
    translation: "против",
  },
  {
    id: 20,
    word: "age",
    translation: "возраст",
  },
  {
    id: 21,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 22,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 23,
    word: "air",
    translation: "воздух",
  },
  {
    id: 24,
    word: "all",
    translation: "все",
  },
  {
    id: 25,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 26,
    word: "almost",
    translation: "почти",
  },
  {
    id: 27,
    word: "alone",
    translation: "один",
  },
  {
    id: 28,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 29,
    word: "already",
    translation: "уже",
  },
  {
    id: 30,
    word: "also",
    translation: "также",
  },
  {
    id: 31,
    word: "although",
    translation: "хотя",
  },
  {
    id: 32,
    word: "always",
    translation: "всегда",
  },
  {
    id: 33,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 34,
    word: "amount",
    translation: "количество",
  },
  {
    id: 35,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 36,
    word: "and",
    translation: "и",
  },
  {
    id: 37,
    word: "animal",
    translation: "животное",
  },
  {
    id: 38,
    word: "another",
    translation: "другой",
  },
  {
    id: 39,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 40,
    word: "any",
    translation: "любой",
  },
  {
    id: 41,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 42,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 43,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 44,
    word: "apply",
    translation: "применять",
  },
  {
    id: 45,
    word: "area",
    translation: "область",
  },
  {
    id: 46,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 47,
    word: "arm",
    translation: "рука",
  },
  {
    id: 48,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 49,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 50,
    word: "art",
    translation: "искусство",
  },
  {
    id: 51,
    word: "ability",
    translation: "способность",
  },
  {
    id: 52,
    word: "able",
    translation: "способный",
  },
  {
    id: 53,
    word: "about",
    translation: "о, около",
  },
  {
    id: 54,
    word: "above",
    translation: "выше",
  },
  {
    id: 55,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 56,
    word: "account",
    translation: "счёт",
  },
  {
    id: 57,
    word: "across",
    translation: "через",
  },
  {
    id: 58,
    word: "act",
    translation: "действовать",
  },
  {
    id: 59,
    word: "action",
    translation: "действие",
  },
  {
    id: 60,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 61,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 62,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 63,
    word: "address",
    translation: "адрес",
  },
  {
    id: 64,
    word: "advice",
    translation: "совет",
  },
  {
    id: 65,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 66,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 67,
    word: "after",
    translation: "после",
  },
  {
    id: 68,
    word: "again",
    translation: "снова",
  },
  {
    id: 69,
    word: "against",
    translation: "против",
  },
  {
    id: 70,
    word: "age",
    translation: "возраст",
  },
  {
    id: 71,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 72,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 73,
    word: "air",
    translation: "воздух",
  },
  {
    id: 74,
    word: "all",
    translation: "все",
  },
  {
    id: 75,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 76,
    word: "almost",
    translation: "почти",
  },
  {
    id: 77,
    word: "alone",
    translation: "один",
  },
  {
    id: 78,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 79,
    word: "already",
    translation: "уже",
  },
  {
    id: 80,
    word: "also",
    translation: "также",
  },
  {
    id: 81,
    word: "although",
    translation: "хотя",
  },
  {
    id: 82,
    word: "always",
    translation: "всегда",
  },
  {
    id: 83,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 84,
    word: "amount",
    translation: "количество",
  },
  {
    id: 85,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 86,
    word: "and",
    translation: "и",
  },
  {
    id: 87,
    word: "animal",
    translation: "животное",
  },
  {
    id: 88,
    word: "another",
    translation: "другой",
  },
  {
    id: 89,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 90,
    word: "any",
    translation: "любой",
  },
  {
    id: 91,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 92,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 93,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 94,
    word: "apply",
    translation: "применять",
  },
  {
    id: 95,
    word: "area",
    translation: "область",
  },
  {
    id: 96,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 97,
    word: "arm",
    translation: "рука",
  },
  {
    id: 98,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 99,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 100,
    word: "art",
    translation: "искусство",
  },
  {
    id: 101,
    word: "ability",
    translation: "способность",
  },
  {
    id: 102,
    word: "able",
    translation: "способный",
  },
  {
    id: 103,
    word: "about",
    translation: "о, около",
  },
  {
    id: 104,
    word: "above",
    translation: "выше",
  },
  {
    id: 105,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 106,
    word: "account",
    translation: "счёт",
  },
  {
    id: 107,
    word: "across",
    translation: "через",
  },
  {
    id: 108,
    word: "act",
    translation: "действовать",
  },
  {
    id: 109,
    word: "action",
    translation: "действие",
  },
  {
    id: 110,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 111,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 112,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 113,
    word: "address",
    translation: "адрес",
  },
  {
    id: 114,
    word: "advice",
    translation: "совет",
  },
  {
    id: 115,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 116,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 117,
    word: "after",
    translation: "после",
  },
  {
    id: 118,
    word: "again",
    translation: "снова",
  },
  {
    id: 119,
    word: "against",
    translation: "против",
  },
  {
    id: 120,
    word: "age",
    translation: "возраст",
  },
  {
    id: 121,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 122,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 123,
    word: "air",
    translation: "воздух",
  },
  {
    id: 124,
    word: "all",
    translation: "все",
  },
  {
    id: 125,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 126,
    word: "almost",
    translation: "почти",
  },
  {
    id: 127,
    word: "alone",
    translation: "один",
  },
  {
    id: 128,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 129,
    word: "already",
    translation: "уже",
  },
  {
    id: 130,
    word: "also",
    translation: "также",
  },
  {
    id: 131,
    word: "although",
    translation: "хотя",
  },
  {
    id: 132,
    word: "always",
    translation: "всегда",
  },
  {
    id: 133,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 134,
    word: "amount",
    translation: "количество",
  },
  {
    id: 135,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 136,
    word: "and",
    translation: "и",
  },
  {
    id: 137,
    word: "animal",
    translation: "животное",
  },
  {
    id: 138,
    word: "another",
    translation: "другой",
  },
  {
    id: 139,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 140,
    word: "any",
    translation: "любой",
  },
  {
    id: 141,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 142,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 143,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 144,
    word: "apply",
    translation: "применять",
  },
  {
    id: 145,
    word: "area",
    translation: "область",
  },
  {
    id: 146,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 147,
    word: "arm",
    translation: "рука",
  },
  {
    id: 148,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 149,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 150,
    word: "art",
    translation: "искусство",
  },
  {
    id: 151,
    word: "ability",
    translation: "способность",
  },
  {
    id: 152,
    word: "able",
    translation: "способный",
  },
  {
    id: 153,
    word: "about",
    translation: "о, около",
  },
  {
    id: 154,
    word: "above",
    translation: "выше",
  },
  {
    id: 155,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 156,
    word: "account",
    translation: "счёт",
  },
  {
    id: 157,
    word: "across",
    translation: "через",
  },
  {
    id: 158,
    word: "act",
    translation: "действовать",
  },
  {
    id: 159,
    word: "action",
    translation: "действие",
  },
  {
    id: 160,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 161,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 162,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 163,
    word: "address",
    translation: "адрес",
  },
  {
    id: 164,
    word: "advice",
    translation: "совет",
  },
  {
    id: 165,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 166,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 167,
    word: "after",
    translation: "после",
  },
  {
    id: 168,
    word: "again",
    translation: "снова",
  },
  {
    id: 169,
    word: "against",
    translation: "против",
  },
  {
    id: 170,
    word: "age",
    translation: "возраст",
  },
  {
    id: 171,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 172,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 173,
    word: "air",
    translation: "воздух",
  },
  {
    id: 174,
    word: "all",
    translation: "все",
  },
  {
    id: 175,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 176,
    word: "almost",
    translation: "почти",
  },
  {
    id: 177,
    word: "alone",
    translation: "один",
  },
  {
    id: 178,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 179,
    word: "already",
    translation: "уже",
  },
  {
    id: 180,
    word: "also",
    translation: "также",
  },
  {
    id: 181,
    word: "although",
    translation: "хотя",
  },
  {
    id: 182,
    word: "always",
    translation: "всегда",
  },
  {
    id: 183,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 184,
    word: "amount",
    translation: "количество",
  },
  {
    id: 185,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 186,
    word: "and",
    translation: "и",
  },
  {
    id: 187,
    word: "animal",
    translation: "животное",
  },
  {
    id: 188,
    word: "another",
    translation: "другой",
  },
  {
    id: 189,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 190,
    word: "any",
    translation: "любой",
  },
  {
    id: 191,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 192,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 193,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 194,
    word: "apply",
    translation: "применять",
  },
  {
    id: 195,
    word: "area",
    translation: "область",
  },
  {
    id: 196,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 197,
    word: "arm",
    translation: "рука",
  },
  {
    id: 198,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 199,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 200,
    word: "art",
    translation: "искусство",
  },
  {
    id: 201,
    word: "ability",
    translation: "способность",
  },
  {
    id: 202,
    word: "able",
    translation: "способный",
  },
  {
    id: 203,
    word: "about",
    translation: "о, около",
  },
  {
    id: 204,
    word: "above",
    translation: "выше",
  },
  {
    id: 205,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 206,
    word: "account",
    translation: "счёт",
  },
  {
    id: 207,
    word: "across",
    translation: "через",
  },
  {
    id: 208,
    word: "act",
    translation: "действовать",
  },
  {
    id: 209,
    word: "action",
    translation: "действие",
  },
  {
    id: 210,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 211,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 212,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 213,
    word: "address",
    translation: "адрес",
  },
  {
    id: 214,
    word: "advice",
    translation: "совет",
  },
  {
    id: 215,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 216,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 217,
    word: "after",
    translation: "после",
  },
  {
    id: 218,
    word: "again",
    translation: "снова",
  },
  {
    id: 219,
    word: "against",
    translation: "против",
  },
  {
    id: 220,
    word: "age",
    translation: "возраст",
  },
  {
    id: 221,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 222,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 223,
    word: "air",
    translation: "воздух",
  },
  {
    id: 224,
    word: "all",
    translation: "все",
  },
  {
    id: 225,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 226,
    word: "almost",
    translation: "почти",
  },
  {
    id: 227,
    word: "alone",
    translation: "один",
  },
  {
    id: 228,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 229,
    word: "already",
    translation: "уже",
  },
  {
    id: 230,
    word: "also",
    translation: "также",
  },
  {
    id: 231,
    word: "although",
    translation: "хотя",
  },
  {
    id: 232,
    word: "always",
    translation: "всегда",
  },
  {
    id: 233,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 234,
    word: "amount",
    translation: "количество",
  },
  {
    id: 235,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 236,
    word: "and",
    translation: "и",
  },
  {
    id: 237,
    word: "animal",
    translation: "животное",
  },
  {
    id: 238,
    word: "another",
    translation: "другой",
  },
  {
    id: 239,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 240,
    word: "any",
    translation: "любой",
  },
  {
    id: 241,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 242,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 243,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 244,
    word: "apply",
    translation: "применять",
  },
  {
    id: 245,
    word: "area",
    translation: "область",
  },
  {
    id: 246,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 247,
    word: "arm",
    translation: "рука",
  },
  {
    id: 248,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 249,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 250,
    word: "art",
    translation: "искусство",
  },
  {
    id: 251,
    word: "ability",
    translation: "способность",
  },
  {
    id: 252,
    word: "able",
    translation: "способный",
  },
  {
    id: 253,
    word: "about",
    translation: "о, около",
  },
  {
    id: 254,
    word: "above",
    translation: "выше",
  },
  {
    id: 255,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 256,
    word: "account",
    translation: "счёт",
  },
  {
    id: 257,
    word: "across",
    translation: "через",
  },
  {
    id: 258,
    word: "act",
    translation: "действовать",
  },
  {
    id: 259,
    word: "action",
    translation: "действие",
  },
  {
    id: 260,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 261,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 262,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 263,
    word: "address",
    translation: "адрес",
  },
  {
    id: 264,
    word: "advice",
    translation: "совет",
  },
  {
    id: 265,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 266,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 267,
    word: "after",
    translation: "после",
  },
  {
    id: 268,
    word: "again",
    translation: "снова",
  },
  {
    id: 269,
    word: "against",
    translation: "против",
  },
  {
    id: 270,
    word: "age",
    translation: "возраст",
  },
  {
    id: 271,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 272,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 273,
    word: "air",
    translation: "воздух",
  },
  {
    id: 274,
    word: "all",
    translation: "все",
  },
  {
    id: 275,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 276,
    word: "almost",
    translation: "почти",
  },
  {
    id: 277,
    word: "alone",
    translation: "один",
  },
  {
    id: 278,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 279,
    word: "already",
    translation: "уже",
  },
  {
    id: 280,
    word: "also",
    translation: "также",
  },
  {
    id: 281,
    word: "although",
    translation: "хотя",
  },
  {
    id: 282,
    word: "always",
    translation: "всегда",
  },
  {
    id: 283,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 284,
    word: "amount",
    translation: "количество",
  },
  {
    id: 285,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 286,
    word: "and",
    translation: "и",
  },
  {
    id: 287,
    word: "animal",
    translation: "животное",
  },
  {
    id: 288,
    word: "another",
    translation: "другой",
  },
  {
    id: 289,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 290,
    word: "any",
    translation: "любой",
  },
  {
    id: 291,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 292,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 293,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 294,
    word: "apply",
    translation: "применять",
  },
  {
    id: 295,
    word: "area",
    translation: "область",
  },
  {
    id: 296,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 297,
    word: "arm",
    translation: "рука",
  },
  {
    id: 298,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 299,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 300,
    word: "art",
    translation: "искусство",
  },
  {
    id: 301,
    word: "ability",
    translation: "способность",
  },
  {
    id: 302,
    word: "able",
    translation: "способный",
  },
  {
    id: 303,
    word: "about",
    translation: "о, около",
  },
  {
    id: 304,
    word: "above",
    translation: "выше",
  },
  {
    id: 305,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 306,
    word: "account",
    translation: "счёт",
  },
  {
    id: 307,
    word: "across",
    translation: "через",
  },
  {
    id: 308,
    word: "act",
    translation: "действовать",
  },
  {
    id: 309,
    word: "action",
    translation: "действие",
  },
  {
    id: 310,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 311,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 312,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 313,
    word: "address",
    translation: "адрес",
  },
  {
    id: 314,
    word: "advice",
    translation: "совет",
  },
  {
    id: 315,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 316,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 317,
    word: "after",
    translation: "после",
  },
  {
    id: 318,
    word: "again",
    translation: "снова",
  },
  {
    id: 319,
    word: "against",
    translation: "против",
  },
  {
    id: 320,
    word: "age",
    translation: "возраст",
  },
  {
    id: 321,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 322,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 323,
    word: "air",
    translation: "воздух",
  },
  {
    id: 324,
    word: "all",
    translation: "все",
  },
  {
    id: 325,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 326,
    word: "almost",
    translation: "почти",
  },
  {
    id: 327,
    word: "alone",
    translation: "один",
  },
  {
    id: 328,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 329,
    word: "already",
    translation: "уже",
  },
  {
    id: 330,
    word: "also",
    translation: "также",
  },
  {
    id: 331,
    word: "although",
    translation: "хотя",
  },
  {
    id: 332,
    word: "always",
    translation: "всегда",
  },
  {
    id: 333,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 334,
    word: "amount",
    translation: "количество",
  },
  {
    id: 335,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 336,
    word: "and",
    translation: "и",
  },
  {
    id: 337,
    word: "animal",
    translation: "животное",
  },
  {
    id: 338,
    word: "another",
    translation: "другой",
  },
  {
    id: 339,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 340,
    word: "any",
    translation: "любой",
  },
  {
    id: 341,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 342,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 343,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 344,
    word: "apply",
    translation: "применять",
  },
  {
    id: 345,
    word: "area",
    translation: "область",
  },
  {
    id: 346,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 347,
    word: "arm",
    translation: "рука",
  },
  {
    id: 348,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 349,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 350,
    word: "art",
    translation: "искусство",
  },
  {
    id: 351,
    word: "ability",
    translation: "способность",
  },
  {
    id: 352,
    word: "able",
    translation: "способный",
  },
  {
    id: 353,
    word: "about",
    translation: "о, около",
  },
  {
    id: 354,
    word: "above",
    translation: "выше",
  },
  {
    id: 355,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 356,
    word: "account",
    translation: "счёт",
  },
  {
    id: 357,
    word: "across",
    translation: "через",
  },
  {
    id: 358,
    word: "act",
    translation: "действовать",
  },
  {
    id: 359,
    word: "action",
    translation: "действие",
  },
  {
    id: 360,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 361,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 362,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 363,
    word: "address",
    translation: "адрес",
  },
  {
    id: 364,
    word: "advice",
    translation: "совет",
  },
  {
    id: 365,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 366,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 367,
    word: "after",
    translation: "после",
  },
  {
    id: 368,
    word: "again",
    translation: "снова",
  },
  {
    id: 369,
    word: "against",
    translation: "против",
  },
  {
    id: 370,
    word: "age",
    translation: "возраст",
  },
  {
    id: 371,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 372,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 373,
    word: "air",
    translation: "воздух",
  },
  {
    id: 374,
    word: "all",
    translation: "все",
  },
  {
    id: 375,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 376,
    word: "almost",
    translation: "почти",
  },
  {
    id: 377,
    word: "alone",
    translation: "один",
  },
  {
    id: 378,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 379,
    word: "already",
    translation: "уже",
  },
  {
    id: 380,
    word: "also",
    translation: "также",
  },
  {
    id: 381,
    word: "although",
    translation: "хотя",
  },
  {
    id: 382,
    word: "always",
    translation: "всегда",
  },
  {
    id: 383,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 384,
    word: "amount",
    translation: "количество",
  },
  {
    id: 385,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 386,
    word: "and",
    translation: "и",
  },
  {
    id: 387,
    word: "animal",
    translation: "животное",
  },
  {
    id: 388,
    word: "another",
    translation: "другой",
  },
  {
    id: 389,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 390,
    word: "any",
    translation: "любой",
  },
  {
    id: 391,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 392,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 393,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 394,
    word: "apply",
    translation: "применять",
  },
  {
    id: 395,
    word: "area",
    translation: "область",
  },
  {
    id: 396,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 397,
    word: "arm",
    translation: "рука",
  },
  {
    id: 398,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 399,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 400,
    word: "art",
    translation: "искусство",
  },
  {
    id: 401,
    word: "ability",
    translation: "способность",
  },
  {
    id: 402,
    word: "able",
    translation: "способный",
  },
  {
    id: 403,
    word: "about",
    translation: "о, около",
  },
  {
    id: 404,
    word: "above",
    translation: "выше",
  },
  {
    id: 405,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 406,
    word: "account",
    translation: "счёт",
  },
  {
    id: 407,
    word: "across",
    translation: "через",
  },
  {
    id: 408,
    word: "act",
    translation: "действовать",
  },
  {
    id: 409,
    word: "action",
    translation: "действие",
  },
  {
    id: 410,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 411,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 412,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 413,
    word: "address",
    translation: "адрес",
  },
  {
    id: 414,
    word: "advice",
    translation: "совет",
  },
  {
    id: 415,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 416,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 417,
    word: "after",
    translation: "после",
  },
  {
    id: 418,
    word: "again",
    translation: "снова",
  },
  {
    id: 419,
    word: "against",
    translation: "против",
  },
  {
    id: 420,
    word: "age",
    translation: "возраст",
  },
  {
    id: 421,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 422,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 423,
    word: "air",
    translation: "воздух",
  },
  {
    id: 424,
    word: "all",
    translation: "все",
  },
  {
    id: 425,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 426,
    word: "almost",
    translation: "почти",
  },
  {
    id: 427,
    word: "alone",
    translation: "один",
  },
  {
    id: 428,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 429,
    word: "already",
    translation: "уже",
  },
  {
    id: 430,
    word: "also",
    translation: "также",
  },
  {
    id: 431,
    word: "although",
    translation: "хотя",
  },
  {
    id: 432,
    word: "always",
    translation: "всегда",
  },
  {
    id: 433,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 434,
    word: "amount",
    translation: "количество",
  },
  {
    id: 435,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 436,
    word: "and",
    translation: "и",
  },
  {
    id: 437,
    word: "animal",
    translation: "животное",
  },
  {
    id: 438,
    word: "another",
    translation: "другой",
  },
  {
    id: 439,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 440,
    word: "any",
    translation: "любой",
  },
  {
    id: 441,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 442,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 443,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 444,
    word: "apply",
    translation: "применять",
  },
  {
    id: 445,
    word: "area",
    translation: "область",
  },
  {
    id: 446,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 447,
    word: "arm",
    translation: "рука",
  },
  {
    id: 448,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 449,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 450,
    word: "art",
    translation: "искусство",
  },
  {
    id: 451,
    word: "ability",
    translation: "способность",
  },
  {
    id: 452,
    word: "able",
    translation: "способный",
  },
  {
    id: 453,
    word: "about",
    translation: "о, около",
  },
  {
    id: 454,
    word: "above",
    translation: "выше",
  },
  {
    id: 455,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 456,
    word: "account",
    translation: "счёт",
  },
  {
    id: 457,
    word: "across",
    translation: "через",
  },
  {
    id: 458,
    word: "act",
    translation: "действовать",
  },
  {
    id: 459,
    word: "action",
    translation: "действие",
  },
  {
    id: 460,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 461,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 462,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 463,
    word: "address",
    translation: "адрес",
  },
  {
    id: 464,
    word: "advice",
    translation: "совет",
  },
  {
    id: 465,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 466,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 467,
    word: "after",
    translation: "после",
  },
  {
    id: 468,
    word: "again",
    translation: "снова",
  },
  {
    id: 469,
    word: "against",
    translation: "против",
  },
  {
    id: 470,
    word: "age",
    translation: "возраст",
  },
  {
    id: 471,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 472,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 473,
    word: "air",
    translation: "воздух",
  },
  {
    id: 474,
    word: "all",
    translation: "все",
  },
  {
    id: 475,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 476,
    word: "almost",
    translation: "почти",
  },
  {
    id: 477,
    word: "alone",
    translation: "один",
  },
  {
    id: 478,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 479,
    word: "already",
    translation: "уже",
  },
  {
    id: 480,
    word: "also",
    translation: "также",
  },
  {
    id: 481,
    word: "although",
    translation: "хотя",
  },
  {
    id: 482,
    word: "always",
    translation: "всегда",
  },
  {
    id: 483,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 484,
    word: "amount",
    translation: "количество",
  },
  {
    id: 485,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 486,
    word: "and",
    translation: "и",
  },
  {
    id: 487,
    word: "animal",
    translation: "животное",
  },
  {
    id: 488,
    word: "another",
    translation: "другой",
  },
  {
    id: 489,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 490,
    word: "any",
    translation: "любой",
  },
  {
    id: 491,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 492,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 493,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 494,
    word: "apply",
    translation: "применять",
  },
  {
    id: 495,
    word: "area",
    translation: "область",
  },
  {
    id: 496,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 497,
    word: "arm",
    translation: "рука",
  },
  {
    id: 498,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 499,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 500,
    word: "art",
    translation: "искусство",
  },
  {
    id: 501,
    word: "ability",
    translation: "способность",
  },
  {
    id: 502,
    word: "able",
    translation: "способный",
  },
  {
    id: 503,
    word: "about",
    translation: "о, около",
  },
  {
    id: 504,
    word: "above",
    translation: "выше",
  },
  {
    id: 505,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 506,
    word: "account",
    translation: "счёт",
  },
  {
    id: 507,
    word: "across",
    translation: "через",
  },
  {
    id: 508,
    word: "act",
    translation: "действовать",
  },
  {
    id: 509,
    word: "action",
    translation: "действие",
  },
  {
    id: 510,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 511,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 512,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 513,
    word: "address",
    translation: "адрес",
  },
  {
    id: 514,
    word: "advice",
    translation: "совет",
  },
  {
    id: 515,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 516,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 517,
    word: "after",
    translation: "после",
  },
  {
    id: 518,
    word: "again",
    translation: "снова",
  },
  {
    id: 519,
    word: "against",
    translation: "против",
  },
  {
    id: 520,
    word: "age",
    translation: "возраст",
  },
  {
    id: 521,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 522,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 523,
    word: "air",
    translation: "воздух",
  },
  {
    id: 524,
    word: "all",
    translation: "все",
  },
  {
    id: 525,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 526,
    word: "almost",
    translation: "почти",
  },
  {
    id: 527,
    word: "alone",
    translation: "один",
  },
  {
    id: 528,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 529,
    word: "already",
    translation: "уже",
  },
  {
    id: 530,
    word: "also",
    translation: "также",
  },
  {
    id: 531,
    word: "although",
    translation: "хотя",
  },
  {
    id: 532,
    word: "always",
    translation: "всегда",
  },
  {
    id: 533,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 534,
    word: "amount",
    translation: "количество",
  },
  {
    id: 535,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 536,
    word: "and",
    translation: "и",
  },
  {
    id: 537,
    word: "animal",
    translation: "животное",
  },
  {
    id: 538,
    word: "another",
    translation: "другой",
  },
  {
    id: 539,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 540,
    word: "any",
    translation: "любой",
  },
  {
    id: 541,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 542,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 543,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 544,
    word: "apply",
    translation: "применять",
  },
  {
    id: 545,
    word: "area",
    translation: "область",
  },
  {
    id: 546,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 547,
    word: "arm",
    translation: "рука",
  },
  {
    id: 548,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 549,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 550,
    word: "art",
    translation: "искусство",
  },
  {
    id: 551,
    word: "ability",
    translation: "способность",
  },
  {
    id: 552,
    word: "able",
    translation: "способный",
  },
  {
    id: 553,
    word: "about",
    translation: "о, около",
  },
  {
    id: 554,
    word: "above",
    translation: "выше",
  },
  {
    id: 555,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 556,
    word: "account",
    translation: "счёт",
  },
  {
    id: 557,
    word: "across",
    translation: "через",
  },
  {
    id: 558,
    word: "act",
    translation: "действовать",
  },
  {
    id: 559,
    word: "action",
    translation: "действие",
  },
  {
    id: 560,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 561,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 562,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 563,
    word: "address",
    translation: "адрес",
  },
  {
    id: 564,
    word: "advice",
    translation: "совет",
  },
  {
    id: 565,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 566,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 567,
    word: "after",
    translation: "после",
  },
  {
    id: 568,
    word: "again",
    translation: "снова",
  },
  {
    id: 569,
    word: "against",
    translation: "против",
  },
  {
    id: 570,
    word: "age",
    translation: "возраст",
  },
  {
    id: 571,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 572,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 573,
    word: "air",
    translation: "воздух",
  },
  {
    id: 574,
    word: "all",
    translation: "все",
  },
  {
    id: 575,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 576,
    word: "almost",
    translation: "почти",
  },
  {
    id: 577,
    word: "alone",
    translation: "один",
  },
  {
    id: 578,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 579,
    word: "already",
    translation: "уже",
  },
  {
    id: 580,
    word: "also",
    translation: "также",
  },
  {
    id: 581,
    word: "although",
    translation: "хотя",
  },
  {
    id: 582,
    word: "always",
    translation: "всегда",
  },
  {
    id: 583,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 584,
    word: "amount",
    translation: "количество",
  },
  {
    id: 585,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 586,
    word: "and",
    translation: "и",
  },
  {
    id: 587,
    word: "animal",
    translation: "животное",
  },
  {
    id: 588,
    word: "another",
    translation: "другой",
  },
  {
    id: 589,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 590,
    word: "any",
    translation: "любой",
  },
  {
    id: 591,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 592,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 593,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 594,
    word: "apply",
    translation: "применять",
  },
  {
    id: 595,
    word: "area",
    translation: "область",
  },
  {
    id: 596,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 597,
    word: "arm",
    translation: "рука",
  },
  {
    id: 598,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 599,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 600,
    word: "art",
    translation: "искусство",
  },
  {
    id: 601,
    word: "ability",
    translation: "способность",
  },
  {
    id: 602,
    word: "able",
    translation: "способный",
  },
  {
    id: 603,
    word: "about",
    translation: "о, около",
  },
  {
    id: 604,
    word: "above",
    translation: "выше",
  },
  {
    id: 605,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 606,
    word: "account",
    translation: "счёт",
  },
  {
    id: 607,
    word: "across",
    translation: "через",
  },
  {
    id: 608,
    word: "act",
    translation: "действовать",
  },
  {
    id: 609,
    word: "action",
    translation: "действие",
  },
  {
    id: 610,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 611,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 612,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 613,
    word: "address",
    translation: "адрес",
  },
  {
    id: 614,
    word: "advice",
    translation: "совет",
  },
  {
    id: 615,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 616,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 617,
    word: "after",
    translation: "после",
  },
  {
    id: 618,
    word: "again",
    translation: "снова",
  },
  {
    id: 619,
    word: "against",
    translation: "против",
  },
  {
    id: 620,
    word: "age",
    translation: "возраст",
  },
  {
    id: 621,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 622,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 623,
    word: "air",
    translation: "воздух",
  },
  {
    id: 624,
    word: "all",
    translation: "все",
  },
  {
    id: 625,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 626,
    word: "almost",
    translation: "почти",
  },
  {
    id: 627,
    word: "alone",
    translation: "один",
  },
  {
    id: 628,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 629,
    word: "already",
    translation: "уже",
  },
  {
    id: 630,
    word: "also",
    translation: "также",
  },
  {
    id: 631,
    word: "although",
    translation: "хотя",
  },
  {
    id: 632,
    word: "always",
    translation: "всегда",
  },
  {
    id: 633,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 634,
    word: "amount",
    translation: "количество",
  },
  {
    id: 635,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 636,
    word: "and",
    translation: "и",
  },
  {
    id: 637,
    word: "animal",
    translation: "животное",
  },
  {
    id: 638,
    word: "another",
    translation: "другой",
  },
  {
    id: 639,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 640,
    word: "any",
    translation: "любой",
  },
  {
    id: 641,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 642,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 643,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 644,
    word: "apply",
    translation: "применять",
  },
  {
    id: 645,
    word: "area",
    translation: "область",
  },
  {
    id: 646,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 647,
    word: "arm",
    translation: "рука",
  },
  {
    id: 648,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 649,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 650,
    word: "art",
    translation: "искусство",
  },
  {
    id: 651,
    word: "ability",
    translation: "способность",
  },
  {
    id: 652,
    word: "able",
    translation: "способный",
  },
  {
    id: 653,
    word: "about",
    translation: "о, около",
  },
  {
    id: 654,
    word: "above",
    translation: "выше",
  },
  {
    id: 655,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 656,
    word: "account",
    translation: "счёт",
  },
  {
    id: 657,
    word: "across",
    translation: "через",
  },
  {
    id: 658,
    word: "act",
    translation: "действовать",
  },
  {
    id: 659,
    word: "action",
    translation: "действие",
  },
  {
    id: 660,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 661,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 662,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 663,
    word: "address",
    translation: "адрес",
  },
  {
    id: 664,
    word: "advice",
    translation: "совет",
  },
  {
    id: 665,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 666,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 667,
    word: "after",
    translation: "после",
  },
  {
    id: 668,
    word: "again",
    translation: "снова",
  },
  {
    id: 669,
    word: "against",
    translation: "против",
  },
  {
    id: 670,
    word: "age",
    translation: "возраст",
  },
  {
    id: 671,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 672,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 673,
    word: "air",
    translation: "воздух",
  },
  {
    id: 674,
    word: "all",
    translation: "все",
  },
  {
    id: 675,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 676,
    word: "almost",
    translation: "почти",
  },
  {
    id: 677,
    word: "alone",
    translation: "один",
  },
  {
    id: 678,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 679,
    word: "already",
    translation: "уже",
  },
  {
    id: 680,
    word: "also",
    translation: "также",
  },
  {
    id: 681,
    word: "although",
    translation: "хотя",
  },
  {
    id: 682,
    word: "always",
    translation: "всегда",
  },
  {
    id: 683,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 684,
    word: "amount",
    translation: "количество",
  },
  {
    id: 685,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 686,
    word: "and",
    translation: "и",
  },
  {
    id: 687,
    word: "animal",
    translation: "животное",
  },
  {
    id: 688,
    word: "another",
    translation: "другой",
  },
  {
    id: 689,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 690,
    word: "any",
    translation: "любой",
  },
  {
    id: 691,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 692,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 693,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 694,
    word: "apply",
    translation: "применять",
  },
  {
    id: 695,
    word: "area",
    translation: "область",
  },
  {
    id: 696,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 697,
    word: "arm",
    translation: "рука",
  },
  {
    id: 698,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 699,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 700,
    word: "art",
    translation: "искусство",
  },
  {
    id: 701,
    word: "ability",
    translation: "способность",
  },
  {
    id: 702,
    word: "able",
    translation: "способный",
  },
  {
    id: 703,
    word: "about",
    translation: "о, около",
  },
  {
    id: 704,
    word: "above",
    translation: "выше",
  },
  {
    id: 705,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 706,
    word: "account",
    translation: "счёт",
  },
  {
    id: 707,
    word: "across",
    translation: "через",
  },
  {
    id: 708,
    word: "act",
    translation: "действовать",
  },
  {
    id: 709,
    word: "action",
    translation: "действие",
  },
  {
    id: 710,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 711,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 712,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 713,
    word: "address",
    translation: "адрес",
  },
  {
    id: 714,
    word: "advice",
    translation: "совет",
  },
  {
    id: 715,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 716,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 717,
    word: "after",
    translation: "после",
  },
  {
    id: 718,
    word: "again",
    translation: "снова",
  },
  {
    id: 719,
    word: "against",
    translation: "против",
  },
  {
    id: 720,
    word: "age",
    translation: "возраст",
  },
  {
    id: 721,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 722,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 723,
    word: "air",
    translation: "воздух",
  },
  {
    id: 724,
    word: "all",
    translation: "все",
  },
  {
    id: 725,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 726,
    word: "almost",
    translation: "почти",
  },
  {
    id: 727,
    word: "alone",
    translation: "один",
  },
  {
    id: 728,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 729,
    word: "already",
    translation: "уже",
  },
  {
    id: 730,
    word: "also",
    translation: "также",
  },
  {
    id: 731,
    word: "although",
    translation: "хотя",
  },
  {
    id: 732,
    word: "always",
    translation: "всегда",
  },
  {
    id: 733,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 734,
    word: "amount",
    translation: "количество",
  },
  {
    id: 735,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 736,
    word: "and",
    translation: "и",
  },
  {
    id: 737,
    word: "animal",
    translation: "животное",
  },
  {
    id: 738,
    word: "another",
    translation: "другой",
  },
  {
    id: 739,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 740,
    word: "any",
    translation: "любой",
  },
  {
    id: 741,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 742,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 743,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 744,
    word: "apply",
    translation: "применять",
  },
  {
    id: 745,
    word: "area",
    translation: "область",
  },
  {
    id: 746,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 747,
    word: "arm",
    translation: "рука",
  },
  {
    id: 748,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 749,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 750,
    word: "art",
    translation: "искусство",
  },
  {
    id: 751,
    word: "ability",
    translation: "способность",
  },
  {
    id: 752,
    word: "able",
    translation: "способный",
  },
  {
    id: 753,
    word: "about",
    translation: "о, около",
  },
  {
    id: 754,
    word: "above",
    translation: "выше",
  },
  {
    id: 755,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 756,
    word: "account",
    translation: "счёт",
  },
  {
    id: 757,
    word: "across",
    translation: "через",
  },
  {
    id: 758,
    word: "act",
    translation: "действовать",
  },
  {
    id: 759,
    word: "action",
    translation: "действие",
  },
  {
    id: 760,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 761,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 762,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 763,
    word: "address",
    translation: "адрес",
  },
  {
    id: 764,
    word: "advice",
    translation: "совет",
  },
  {
    id: 765,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 766,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 767,
    word: "after",
    translation: "после",
  },
  {
    id: 768,
    word: "again",
    translation: "снова",
  },
  {
    id: 769,
    word: "against",
    translation: "против",
  },
  {
    id: 770,
    word: "age",
    translation: "возраст",
  },
  {
    id: 771,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 772,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 773,
    word: "air",
    translation: "воздух",
  },
  {
    id: 774,
    word: "all",
    translation: "все",
  },
  {
    id: 775,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 776,
    word: "almost",
    translation: "почти",
  },
  {
    id: 777,
    word: "alone",
    translation: "один",
  },
  {
    id: 778,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 779,
    word: "already",
    translation: "уже",
  },
  {
    id: 780,
    word: "also",
    translation: "также",
  },
  {
    id: 781,
    word: "although",
    translation: "хотя",
  },
  {
    id: 782,
    word: "always",
    translation: "всегда",
  },
  {
    id: 783,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 784,
    word: "amount",
    translation: "количество",
  },
  {
    id: 785,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 786,
    word: "and",
    translation: "и",
  },
  {
    id: 787,
    word: "animal",
    translation: "животное",
  },
  {
    id: 788,
    word: "another",
    translation: "другой",
  },
  {
    id: 789,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 790,
    word: "any",
    translation: "любой",
  },
  {
    id: 791,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 792,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 793,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 794,
    word: "apply",
    translation: "применять",
  },
  {
    id: 795,
    word: "area",
    translation: "область",
  },
  {
    id: 796,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 797,
    word: "arm",
    translation: "рука",
  },
  {
    id: 798,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 799,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 800,
    word: "art",
    translation: "искусство",
  },
  {
    id: 801,
    word: "ability",
    translation: "способность",
  },
  {
    id: 802,
    word: "able",
    translation: "способный",
  },
  {
    id: 803,
    word: "about",
    translation: "о, около",
  },
  {
    id: 804,
    word: "above",
    translation: "выше",
  },
  {
    id: 805,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 806,
    word: "account",
    translation: "счёт",
  },
  {
    id: 807,
    word: "across",
    translation: "через",
  },
  {
    id: 808,
    word: "act",
    translation: "действовать",
  },
  {
    id: 809,
    word: "action",
    translation: "действие",
  },
  {
    id: 810,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 811,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 812,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 813,
    word: "address",
    translation: "адрес",
  },
  {
    id: 814,
    word: "advice",
    translation: "совет",
  },
  {
    id: 815,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 816,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 817,
    word: "after",
    translation: "после",
  },
  {
    id: 818,
    word: "again",
    translation: "снова",
  },
  {
    id: 819,
    word: "against",
    translation: "против",
  },
  {
    id: 820,
    word: "age",
    translation: "возраст",
  },
  {
    id: 821,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 822,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 823,
    word: "air",
    translation: "воздух",
  },
  {
    id: 824,
    word: "all",
    translation: "все",
  },
  {
    id: 825,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 826,
    word: "almost",
    translation: "почти",
  },
  {
    id: 827,
    word: "alone",
    translation: "один",
  },
  {
    id: 828,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 829,
    word: "already",
    translation: "уже",
  },
  {
    id: 830,
    word: "also",
    translation: "также",
  },
  {
    id: 831,
    word: "although",
    translation: "хотя",
  },
  {
    id: 832,
    word: "always",
    translation: "всегда",
  },
  {
    id: 833,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 834,
    word: "amount",
    translation: "количество",
  },
  {
    id: 835,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 836,
    word: "and",
    translation: "и",
  },
  {
    id: 837,
    word: "animal",
    translation: "животное",
  },
  {
    id: 838,
    word: "another",
    translation: "другой",
  },
  {
    id: 839,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 840,
    word: "any",
    translation: "любой",
  },
  {
    id: 841,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 842,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 843,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 844,
    word: "apply",
    translation: "применять",
  },
  {
    id: 845,
    word: "area",
    translation: "область",
  },
  {
    id: 846,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 847,
    word: "arm",
    translation: "рука",
  },
  {
    id: 848,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 849,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 850,
    word: "art",
    translation: "искусство",
  },
  {
    id: 851,
    word: "ability",
    translation: "способность",
  },
  {
    id: 852,
    word: "able",
    translation: "способный",
  },
  {
    id: 853,
    word: "about",
    translation: "о, около",
  },
  {
    id: 854,
    word: "above",
    translation: "выше",
  },
  {
    id: 855,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 856,
    word: "account",
    translation: "счёт",
  },
  {
    id: 857,
    word: "across",
    translation: "через",
  },
  {
    id: 858,
    word: "act",
    translation: "действовать",
  },
  {
    id: 859,
    word: "action",
    translation: "действие",
  },
  {
    id: 860,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 861,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 862,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 863,
    word: "address",
    translation: "адрес",
  },
  {
    id: 864,
    word: "advice",
    translation: "совет",
  },
  {
    id: 865,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 866,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 867,
    word: "after",
    translation: "после",
  },
  {
    id: 868,
    word: "again",
    translation: "снова",
  },
  {
    id: 869,
    word: "against",
    translation: "против",
  },
  {
    id: 870,
    word: "age",
    translation: "возраст",
  },
  {
    id: 871,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 872,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 873,
    word: "air",
    translation: "воздух",
  },
  {
    id: 874,
    word: "all",
    translation: "все",
  },
  {
    id: 875,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 876,
    word: "almost",
    translation: "почти",
  },
  {
    id: 877,
    word: "alone",
    translation: "один",
  },
  {
    id: 878,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 879,
    word: "already",
    translation: "уже",
  },
  {
    id: 880,
    word: "also",
    translation: "также",
  },
  {
    id: 881,
    word: "although",
    translation: "хотя",
  },
  {
    id: 882,
    word: "always",
    translation: "всегда",
  },
  {
    id: 883,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 884,
    word: "amount",
    translation: "количество",
  },
  {
    id: 885,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 886,
    word: "and",
    translation: "и",
  },
  {
    id: 887,
    word: "animal",
    translation: "животное",
  },
  {
    id: 888,
    word: "another",
    translation: "другой",
  },
  {
    id: 889,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 890,
    word: "any",
    translation: "любой",
  },
  {
    id: 891,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 892,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 893,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 894,
    word: "apply",
    translation: "применять",
  },
  {
    id: 895,
    word: "area",
    translation: "область",
  },
  {
    id: 896,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 897,
    word: "arm",
    translation: "рука",
  },
  {
    id: 898,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 899,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 900,
    word: "art",
    translation: "искусство",
  },
  {
    id: 901,
    word: "ability",
    translation: "способность",
  },
  {
    id: 902,
    word: "able",
    translation: "способный",
  },
  {
    id: 903,
    word: "about",
    translation: "о, около",
  },
  {
    id: 904,
    word: "above",
    translation: "выше",
  },
  {
    id: 905,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 906,
    word: "account",
    translation: "счёт",
  },
  {
    id: 907,
    word: "across",
    translation: "через",
  },
  {
    id: 908,
    word: "act",
    translation: "действовать",
  },
  {
    id: 909,
    word: "action",
    translation: "действие",
  },
  {
    id: 910,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 911,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 912,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 913,
    word: "address",
    translation: "адрес",
  },
  {
    id: 914,
    word: "advice",
    translation: "совет",
  },
  {
    id: 915,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 916,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 917,
    word: "after",
    translation: "после",
  },
  {
    id: 918,
    word: "again",
    translation: "снова",
  },
  {
    id: 919,
    word: "against",
    translation: "против",
  },
  {
    id: 920,
    word: "age",
    translation: "возраст",
  },
  {
    id: 921,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 922,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 923,
    word: "air",
    translation: "воздух",
  },
  {
    id: 924,
    word: "all",
    translation: "все",
  },
  {
    id: 925,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 926,
    word: "almost",
    translation: "почти",
  },
  {
    id: 927,
    word: "alone",
    translation: "один",
  },
  {
    id: 928,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 929,
    word: "already",
    translation: "уже",
  },
  {
    id: 930,
    word: "also",
    translation: "также",
  },
  {
    id: 931,
    word: "although",
    translation: "хотя",
  },
  {
    id: 932,
    word: "always",
    translation: "всегда",
  },
  {
    id: 933,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 934,
    word: "amount",
    translation: "количество",
  },
  {
    id: 935,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 936,
    word: "and",
    translation: "и",
  },
  {
    id: 937,
    word: "animal",
    translation: "животное",
  },
  {
    id: 938,
    word: "another",
    translation: "другой",
  },
  {
    id: 939,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 940,
    word: "any",
    translation: "любой",
  },
  {
    id: 941,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 942,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 943,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 944,
    word: "apply",
    translation: "применять",
  },
  {
    id: 945,
    word: "area",
    translation: "область",
  },
  {
    id: 946,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 947,
    word: "arm",
    translation: "рука",
  },
  {
    id: 948,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 949,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 950,
    word: "art",
    translation: "искусство",
  },
  {
    id: 951,
    word: "ability",
    translation: "способность",
  },
  {
    id: 952,
    word: "able",
    translation: "способный",
  },
  {
    id: 953,
    word: "about",
    translation: "о, около",
  },
  {
    id: 954,
    word: "above",
    translation: "выше",
  },
  {
    id: 955,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 956,
    word: "account",
    translation: "счёт",
  },
  {
    id: 957,
    word: "across",
    translation: "через",
  },
  {
    id: 958,
    word: "act",
    translation: "действовать",
  },
  {
    id: 959,
    word: "action",
    translation: "действие",
  },
  {
    id: 960,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 961,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 962,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 963,
    word: "address",
    translation: "адрес",
  },
  {
    id: 964,
    word: "advice",
    translation: "совет",
  },
  {
    id: 965,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 966,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 967,
    word: "after",
    translation: "после",
  },
  {
    id: 968,
    word: "again",
    translation: "снова",
  },
  {
    id: 969,
    word: "against",
    translation: "против",
  },
  {
    id: 970,
    word: "age",
    translation: "возраст",
  },
  {
    id: 971,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 972,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 973,
    word: "air",
    translation: "воздух",
  },
  {
    id: 974,
    word: "all",
    translation: "все",
  },
  {
    id: 975,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 976,
    word: "almost",
    translation: "почти",
  },
  {
    id: 977,
    word: "alone",
    translation: "один",
  },
  {
    id: 978,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 979,
    word: "already",
    translation: "уже",
  },
  {
    id: 980,
    word: "also",
    translation: "также",
  },
  {
    id: 981,
    word: "although",
    translation: "хотя",
  },
  {
    id: 982,
    word: "always",
    translation: "всегда",
  },
  {
    id: 983,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 984,
    word: "amount",
    translation: "количество",
  },
  {
    id: 985,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 986,
    word: "and",
    translation: "и",
  },
  {
    id: 987,
    word: "animal",
    translation: "животное",
  },
  {
    id: 988,
    word: "another",
    translation: "другой",
  },
  {
    id: 989,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 990,
    word: "any",
    translation: "любой",
  },
  {
    id: 991,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 992,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 993,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 994,
    word: "apply",
    translation: "применять",
  },
  {
    id: 995,
    word: "area",
    translation: "область",
  },
  {
    id: 996,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 997,
    word: "arm",
    translation: "рука",
  },
  {
    id: 998,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 999,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1000,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1001,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1002,
    word: "able",
    translation: "способный",
  },
  {
    id: 1003,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1004,
    word: "above",
    translation: "выше",
  },
  {
    id: 1005,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1006,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1007,
    word: "across",
    translation: "через",
  },
  {
    id: 1008,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1009,
    word: "action",
    translation: "действие",
  },
  {
    id: 1010,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1011,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1012,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1013,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1014,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1015,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1016,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1017,
    word: "after",
    translation: "после",
  },
  {
    id: 1018,
    word: "again",
    translation: "снова",
  },
  {
    id: 1019,
    word: "against",
    translation: "против",
  },
  {
    id: 1020,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1021,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1022,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1023,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1024,
    word: "all",
    translation: "все",
  },
  {
    id: 1025,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1026,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1027,
    word: "alone",
    translation: "один",
  },
  {
    id: 1028,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1029,
    word: "already",
    translation: "уже",
  },
  {
    id: 1030,
    word: "also",
    translation: "также",
  },
  {
    id: 1031,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1032,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1033,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1034,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1035,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1036,
    word: "and",
    translation: "и",
  },
  {
    id: 1037,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1038,
    word: "another",
    translation: "другой",
  },
  {
    id: 1039,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1040,
    word: "any",
    translation: "любой",
  },
  {
    id: 1041,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1042,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1043,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1044,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1045,
    word: "area",
    translation: "область",
  },
  {
    id: 1046,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1047,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1048,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1049,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1050,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1051,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1052,
    word: "able",
    translation: "способный",
  },
  {
    id: 1053,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1054,
    word: "above",
    translation: "выше",
  },
  {
    id: 1055,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1056,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1057,
    word: "across",
    translation: "через",
  },
  {
    id: 1058,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1059,
    word: "action",
    translation: "действие",
  },
  {
    id: 1060,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1061,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1062,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1063,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1064,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1065,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1066,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1067,
    word: "after",
    translation: "после",
  },
  {
    id: 1068,
    word: "again",
    translation: "снова",
  },
  {
    id: 1069,
    word: "against",
    translation: "против",
  },
  {
    id: 1070,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1071,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1072,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1073,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1074,
    word: "all",
    translation: "все",
  },
  {
    id: 1075,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1076,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1077,
    word: "alone",
    translation: "один",
  },
  {
    id: 1078,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1079,
    word: "already",
    translation: "уже",
  },
  {
    id: 1080,
    word: "also",
    translation: "также",
  },
  {
    id: 1081,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1082,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1083,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1084,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1085,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1086,
    word: "and",
    translation: "и",
  },
  {
    id: 1087,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1088,
    word: "another",
    translation: "другой",
  },
  {
    id: 1089,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1090,
    word: "any",
    translation: "любой",
  },
  {
    id: 1091,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1092,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1093,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1094,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1095,
    word: "area",
    translation: "область",
  },
  {
    id: 1096,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1097,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1098,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1099,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1100,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1101,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1102,
    word: "able",
    translation: "способный",
  },
  {
    id: 1103,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1104,
    word: "above",
    translation: "выше",
  },
  {
    id: 1105,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1106,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1107,
    word: "across",
    translation: "через",
  },
  {
    id: 1108,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1109,
    word: "action",
    translation: "действие",
  },
  {
    id: 1110,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1111,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1112,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1113,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1114,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1115,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1116,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1117,
    word: "after",
    translation: "после",
  },
  {
    id: 1118,
    word: "again",
    translation: "снова",
  },
  {
    id: 1119,
    word: "against",
    translation: "против",
  },
  {
    id: 1120,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1121,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1122,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1123,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1124,
    word: "all",
    translation: "все",
  },
  {
    id: 1125,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1126,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1127,
    word: "alone",
    translation: "один",
  },
  {
    id: 1128,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1129,
    word: "already",
    translation: "уже",
  },
  {
    id: 1130,
    word: "also",
    translation: "также",
  },
  {
    id: 1131,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1132,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1133,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1134,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1135,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1136,
    word: "and",
    translation: "и",
  },
  {
    id: 1137,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1138,
    word: "another",
    translation: "другой",
  },
  {
    id: 1139,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1140,
    word: "any",
    translation: "любой",
  },
  {
    id: 1141,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1142,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1143,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1144,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1145,
    word: "area",
    translation: "область",
  },
  {
    id: 1146,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1147,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1148,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1149,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1150,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1151,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1152,
    word: "able",
    translation: "способный",
  },
  {
    id: 1153,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1154,
    word: "above",
    translation: "выше",
  },
  {
    id: 1155,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1156,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1157,
    word: "across",
    translation: "через",
  },
  {
    id: 1158,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1159,
    word: "action",
    translation: "действие",
  },
  {
    id: 1160,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1161,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1162,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1163,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1164,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1165,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1166,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1167,
    word: "after",
    translation: "после",
  },
  {
    id: 1168,
    word: "again",
    translation: "снова",
  },
  {
    id: 1169,
    word: "against",
    translation: "против",
  },
  {
    id: 1170,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1171,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1172,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1173,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1174,
    word: "all",
    translation: "все",
  },
  {
    id: 1175,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1176,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1177,
    word: "alone",
    translation: "один",
  },
  {
    id: 1178,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1179,
    word: "already",
    translation: "уже",
  },
  {
    id: 1180,
    word: "also",
    translation: "также",
  },
  {
    id: 1181,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1182,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1183,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1184,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1185,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1186,
    word: "and",
    translation: "и",
  },
  {
    id: 1187,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1188,
    word: "another",
    translation: "другой",
  },
  {
    id: 1189,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1190,
    word: "any",
    translation: "любой",
  },
  {
    id: 1191,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1192,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1193,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1194,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1195,
    word: "area",
    translation: "область",
  },
  {
    id: 1196,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1197,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1198,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1199,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1200,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1201,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1202,
    word: "able",
    translation: "способный",
  },
  {
    id: 1203,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1204,
    word: "above",
    translation: "выше",
  },
  {
    id: 1205,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1206,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1207,
    word: "across",
    translation: "через",
  },
  {
    id: 1208,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1209,
    word: "action",
    translation: "действие",
  },
  {
    id: 1210,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1211,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1212,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1213,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1214,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1215,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1216,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1217,
    word: "after",
    translation: "после",
  },
  {
    id: 1218,
    word: "again",
    translation: "снова",
  },
  {
    id: 1219,
    word: "against",
    translation: "против",
  },
  {
    id: 1220,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1221,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1222,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1223,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1224,
    word: "all",
    translation: "все",
  },
  {
    id: 1225,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1226,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1227,
    word: "alone",
    translation: "один",
  },
  {
    id: 1228,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1229,
    word: "already",
    translation: "уже",
  },
  {
    id: 1230,
    word: "also",
    translation: "также",
  },
  {
    id: 1231,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1232,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1233,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1234,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1235,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1236,
    word: "and",
    translation: "и",
  },
  {
    id: 1237,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1238,
    word: "another",
    translation: "другой",
  },
  {
    id: 1239,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1240,
    word: "any",
    translation: "любой",
  },
  {
    id: 1241,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1242,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1243,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1244,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1245,
    word: "area",
    translation: "область",
  },
  {
    id: 1246,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1247,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1248,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1249,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1250,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1251,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1252,
    word: "able",
    translation: "способный",
  },
  {
    id: 1253,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1254,
    word: "above",
    translation: "выше",
  },
  {
    id: 1255,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1256,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1257,
    word: "across",
    translation: "через",
  },
  {
    id: 1258,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1259,
    word: "action",
    translation: "действие",
  },
  {
    id: 1260,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1261,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1262,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1263,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1264,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1265,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1266,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1267,
    word: "after",
    translation: "после",
  },
  {
    id: 1268,
    word: "again",
    translation: "снова",
  },
  {
    id: 1269,
    word: "against",
    translation: "против",
  },
  {
    id: 1270,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1271,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1272,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1273,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1274,
    word: "all",
    translation: "все",
  },
  {
    id: 1275,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1276,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1277,
    word: "alone",
    translation: "один",
  },
  {
    id: 1278,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1279,
    word: "already",
    translation: "уже",
  },
  {
    id: 1280,
    word: "also",
    translation: "также",
  },
  {
    id: 1281,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1282,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1283,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1284,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1285,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1286,
    word: "and",
    translation: "и",
  },
  {
    id: 1287,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1288,
    word: "another",
    translation: "другой",
  },
  {
    id: 1289,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1290,
    word: "any",
    translation: "любой",
  },
  {
    id: 1291,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1292,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1293,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1294,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1295,
    word: "area",
    translation: "область",
  },
  {
    id: 1296,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1297,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1298,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1299,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1300,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1301,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1302,
    word: "able",
    translation: "способный",
  },
  {
    id: 1303,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1304,
    word: "above",
    translation: "выше",
  },
  {
    id: 1305,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1306,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1307,
    word: "across",
    translation: "через",
  },
  {
    id: 1308,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1309,
    word: "action",
    translation: "действие",
  },
  {
    id: 1310,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1311,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1312,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1313,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1314,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1315,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1316,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1317,
    word: "after",
    translation: "после",
  },
  {
    id: 1318,
    word: "again",
    translation: "снова",
  },
  {
    id: 1319,
    word: "against",
    translation: "против",
  },
  {
    id: 1320,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1321,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1322,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1323,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1324,
    word: "all",
    translation: "все",
  },
  {
    id: 1325,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1326,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1327,
    word: "alone",
    translation: "один",
  },
  {
    id: 1328,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1329,
    word: "already",
    translation: "уже",
  },
  {
    id: 1330,
    word: "also",
    translation: "также",
  },
  {
    id: 1331,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1332,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1333,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1334,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1335,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1336,
    word: "and",
    translation: "и",
  },
  {
    id: 1337,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1338,
    word: "another",
    translation: "другой",
  },
  {
    id: 1339,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1340,
    word: "any",
    translation: "любой",
  },
  {
    id: 1341,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1342,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1343,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1344,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1345,
    word: "area",
    translation: "область",
  },
  {
    id: 1346,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1347,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1348,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1349,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1350,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1351,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1352,
    word: "able",
    translation: "способный",
  },
  {
    id: 1353,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1354,
    word: "above",
    translation: "выше",
  },
  {
    id: 1355,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1356,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1357,
    word: "across",
    translation: "через",
  },
  {
    id: 1358,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1359,
    word: "action",
    translation: "действие",
  },
  {
    id: 1360,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1361,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1362,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1363,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1364,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1365,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1366,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1367,
    word: "after",
    translation: "после",
  },
  {
    id: 1368,
    word: "again",
    translation: "снова",
  },
  {
    id: 1369,
    word: "against",
    translation: "против",
  },
  {
    id: 1370,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1371,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1372,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1373,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1374,
    word: "all",
    translation: "все",
  },
  {
    id: 1375,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1376,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1377,
    word: "alone",
    translation: "один",
  },
  {
    id: 1378,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1379,
    word: "already",
    translation: "уже",
  },
  {
    id: 1380,
    word: "also",
    translation: "также",
  },
  {
    id: 1381,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1382,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1383,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1384,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1385,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1386,
    word: "and",
    translation: "и",
  },
  {
    id: 1387,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1388,
    word: "another",
    translation: "другой",
  },
  {
    id: 1389,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1390,
    word: "any",
    translation: "любой",
  },
  {
    id: 1391,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1392,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1393,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1394,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1395,
    word: "area",
    translation: "область",
  },
  {
    id: 1396,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1397,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1398,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1399,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1400,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1401,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1402,
    word: "able",
    translation: "способный",
  },
  {
    id: 1403,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1404,
    word: "above",
    translation: "выше",
  },
  {
    id: 1405,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1406,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1407,
    word: "across",
    translation: "через",
  },
  {
    id: 1408,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1409,
    word: "action",
    translation: "действие",
  },
  {
    id: 1410,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1411,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1412,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1413,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1414,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1415,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1416,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1417,
    word: "after",
    translation: "после",
  },
  {
    id: 1418,
    word: "again",
    translation: "снова",
  },
  {
    id: 1419,
    word: "against",
    translation: "против",
  },
  {
    id: 1420,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1421,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1422,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1423,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1424,
    word: "all",
    translation: "все",
  },
  {
    id: 1425,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1426,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1427,
    word: "alone",
    translation: "один",
  },
  {
    id: 1428,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1429,
    word: "already",
    translation: "уже",
  },
  {
    id: 1430,
    word: "also",
    translation: "также",
  },
  {
    id: 1431,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1432,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1433,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1434,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1435,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1436,
    word: "and",
    translation: "и",
  },
  {
    id: 1437,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1438,
    word: "another",
    translation: "другой",
  },
  {
    id: 1439,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1440,
    word: "any",
    translation: "любой",
  },
  {
    id: 1441,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1442,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1443,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1444,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1445,
    word: "area",
    translation: "область",
  },
  {
    id: 1446,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1447,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1448,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1449,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1450,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1451,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1452,
    word: "able",
    translation: "способный",
  },
  {
    id: 1453,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1454,
    word: "above",
    translation: "выше",
  },
  {
    id: 1455,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1456,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1457,
    word: "across",
    translation: "через",
  },
  {
    id: 1458,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1459,
    word: "action",
    translation: "действие",
  },
  {
    id: 1460,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1461,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1462,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1463,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1464,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1465,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1466,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1467,
    word: "after",
    translation: "после",
  },
  {
    id: 1468,
    word: "again",
    translation: "снова",
  },
  {
    id: 1469,
    word: "against",
    translation: "против",
  },
  {
    id: 1470,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1471,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1472,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1473,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1474,
    word: "all",
    translation: "все",
  },
  {
    id: 1475,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1476,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1477,
    word: "alone",
    translation: "один",
  },
  {
    id: 1478,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1479,
    word: "already",
    translation: "уже",
  },
  {
    id: 1480,
    word: "also",
    translation: "также",
  },
  {
    id: 1481,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1482,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1483,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1484,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1485,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1486,
    word: "and",
    translation: "и",
  },
  {
    id: 1487,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1488,
    word: "another",
    translation: "другой",
  },
  {
    id: 1489,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1490,
    word: "any",
    translation: "любой",
  },
  {
    id: 1491,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1492,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1493,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1494,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1495,
    word: "area",
    translation: "область",
  },
  {
    id: 1496,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1497,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1498,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1499,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1500,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1501,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1502,
    word: "able",
    translation: "способный",
  },
  {
    id: 1503,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1504,
    word: "above",
    translation: "выше",
  },
  {
    id: 1505,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1506,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1507,
    word: "across",
    translation: "через",
  },
  {
    id: 1508,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1509,
    word: "action",
    translation: "действие",
  },
  {
    id: 1510,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1511,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1512,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1513,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1514,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1515,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1516,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1517,
    word: "after",
    translation: "после",
  },
  {
    id: 1518,
    word: "again",
    translation: "снова",
  },
  {
    id: 1519,
    word: "against",
    translation: "против",
  },
  {
    id: 1520,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1521,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1522,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1523,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1524,
    word: "all",
    translation: "все",
  },
  {
    id: 1525,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1526,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1527,
    word: "alone",
    translation: "один",
  },
  {
    id: 1528,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1529,
    word: "already",
    translation: "уже",
  },
  {
    id: 1530,
    word: "also",
    translation: "также",
  },
  {
    id: 1531,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1532,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1533,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1534,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1535,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1536,
    word: "and",
    translation: "и",
  },
  {
    id: 1537,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1538,
    word: "another",
    translation: "другой",
  },
  {
    id: 1539,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1540,
    word: "any",
    translation: "любой",
  },
  {
    id: 1541,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1542,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1543,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1544,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1545,
    word: "area",
    translation: "область",
  },
  {
    id: 1546,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1547,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1548,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1549,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1550,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1551,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1552,
    word: "able",
    translation: "способный",
  },
  {
    id: 1553,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1554,
    word: "above",
    translation: "выше",
  },
  {
    id: 1555,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1556,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1557,
    word: "across",
    translation: "через",
  },
  {
    id: 1558,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1559,
    word: "action",
    translation: "действие",
  },
  {
    id: 1560,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1561,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1562,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1563,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1564,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1565,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1566,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1567,
    word: "after",
    translation: "после",
  },
  {
    id: 1568,
    word: "again",
    translation: "снова",
  },
  {
    id: 1569,
    word: "against",
    translation: "против",
  },
  {
    id: 1570,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1571,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1572,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1573,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1574,
    word: "all",
    translation: "все",
  },
  {
    id: 1575,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1576,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1577,
    word: "alone",
    translation: "один",
  },
  {
    id: 1578,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1579,
    word: "already",
    translation: "уже",
  },
  {
    id: 1580,
    word: "also",
    translation: "также",
  },
  {
    id: 1581,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1582,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1583,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1584,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1585,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1586,
    word: "and",
    translation: "и",
  },
  {
    id: 1587,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1588,
    word: "another",
    translation: "другой",
  },
  {
    id: 1589,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1590,
    word: "any",
    translation: "любой",
  },
  {
    id: 1591,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1592,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1593,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1594,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1595,
    word: "area",
    translation: "область",
  },
  {
    id: 1596,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1597,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1598,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1599,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1600,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1601,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1602,
    word: "able",
    translation: "способный",
  },
  {
    id: 1603,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1604,
    word: "above",
    translation: "выше",
  },
  {
    id: 1605,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1606,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1607,
    word: "across",
    translation: "через",
  },
  {
    id: 1608,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1609,
    word: "action",
    translation: "действие",
  },
  {
    id: 1610,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1611,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1612,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1613,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1614,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1615,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1616,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1617,
    word: "after",
    translation: "после",
  },
  {
    id: 1618,
    word: "again",
    translation: "снова",
  },
  {
    id: 1619,
    word: "against",
    translation: "против",
  },
  {
    id: 1620,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1621,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1622,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1623,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1624,
    word: "all",
    translation: "все",
  },
  {
    id: 1625,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1626,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1627,
    word: "alone",
    translation: "один",
  },
  {
    id: 1628,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1629,
    word: "already",
    translation: "уже",
  },
  {
    id: 1630,
    word: "also",
    translation: "также",
  },
  {
    id: 1631,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1632,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1633,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1634,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1635,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1636,
    word: "and",
    translation: "и",
  },
  {
    id: 1637,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1638,
    word: "another",
    translation: "другой",
  },
  {
    id: 1639,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1640,
    word: "any",
    translation: "любой",
  },
  {
    id: 1641,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1642,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1643,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1644,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1645,
    word: "area",
    translation: "область",
  },
  {
    id: 1646,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1647,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1648,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1649,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1650,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1651,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1652,
    word: "able",
    translation: "способный",
  },
  {
    id: 1653,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1654,
    word: "above",
    translation: "выше",
  },
  {
    id: 1655,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1656,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1657,
    word: "across",
    translation: "через",
  },
  {
    id: 1658,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1659,
    word: "action",
    translation: "действие",
  },
  {
    id: 1660,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1661,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1662,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1663,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1664,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1665,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1666,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1667,
    word: "after",
    translation: "после",
  },
  {
    id: 1668,
    word: "again",
    translation: "снова",
  },
  {
    id: 1669,
    word: "against",
    translation: "против",
  },
  {
    id: 1670,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1671,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1672,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1673,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1674,
    word: "all",
    translation: "все",
  },
  {
    id: 1675,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1676,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1677,
    word: "alone",
    translation: "один",
  },
  {
    id: 1678,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1679,
    word: "already",
    translation: "уже",
  },
  {
    id: 1680,
    word: "also",
    translation: "также",
  },
  {
    id: 1681,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1682,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1683,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1684,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1685,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1686,
    word: "and",
    translation: "и",
  },
  {
    id: 1687,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1688,
    word: "another",
    translation: "другой",
  },
  {
    id: 1689,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1690,
    word: "any",
    translation: "любой",
  },
  {
    id: 1691,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1692,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1693,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1694,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1695,
    word: "area",
    translation: "область",
  },
  {
    id: 1696,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1697,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1698,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1699,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1700,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1701,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1702,
    word: "able",
    translation: "способный",
  },
  {
    id: 1703,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1704,
    word: "above",
    translation: "выше",
  },
  {
    id: 1705,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1706,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1707,
    word: "across",
    translation: "через",
  },
  {
    id: 1708,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1709,
    word: "action",
    translation: "действие",
  },
  {
    id: 1710,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1711,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1712,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1713,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1714,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1715,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1716,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1717,
    word: "after",
    translation: "после",
  },
  {
    id: 1718,
    word: "again",
    translation: "снова",
  },
  {
    id: 1719,
    word: "against",
    translation: "против",
  },
  {
    id: 1720,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1721,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1722,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1723,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1724,
    word: "all",
    translation: "все",
  },
  {
    id: 1725,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1726,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1727,
    word: "alone",
    translation: "один",
  },
  {
    id: 1728,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1729,
    word: "already",
    translation: "уже",
  },
  {
    id: 1730,
    word: "also",
    translation: "также",
  },
  {
    id: 1731,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1732,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1733,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1734,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1735,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1736,
    word: "and",
    translation: "и",
  },
  {
    id: 1737,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1738,
    word: "another",
    translation: "другой",
  },
  {
    id: 1739,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1740,
    word: "any",
    translation: "любой",
  },
  {
    id: 1741,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1742,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1743,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1744,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1745,
    word: "area",
    translation: "область",
  },
  {
    id: 1746,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1747,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1748,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1749,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1750,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1751,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1752,
    word: "able",
    translation: "способный",
  },
  {
    id: 1753,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1754,
    word: "above",
    translation: "выше",
  },
  {
    id: 1755,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1756,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1757,
    word: "across",
    translation: "через",
  },
  {
    id: 1758,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1759,
    word: "action",
    translation: "действие",
  },
  {
    id: 1760,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1761,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1762,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1763,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1764,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1765,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1766,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1767,
    word: "after",
    translation: "после",
  },
  {
    id: 1768,
    word: "again",
    translation: "снова",
  },
  {
    id: 1769,
    word: "against",
    translation: "против",
  },
  {
    id: 1770,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1771,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1772,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1773,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1774,
    word: "all",
    translation: "все",
  },
  {
    id: 1775,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1776,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1777,
    word: "alone",
    translation: "один",
  },
  {
    id: 1778,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1779,
    word: "already",
    translation: "уже",
  },
  {
    id: 1780,
    word: "also",
    translation: "также",
  },
  {
    id: 1781,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1782,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1783,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1784,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1785,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1786,
    word: "and",
    translation: "и",
  },
  {
    id: 1787,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1788,
    word: "another",
    translation: "другой",
  },
  {
    id: 1789,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1790,
    word: "any",
    translation: "любой",
  },
  {
    id: 1791,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1792,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1793,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1794,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1795,
    word: "area",
    translation: "область",
  },
  {
    id: 1796,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1797,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1798,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1799,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1800,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1801,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1802,
    word: "able",
    translation: "способный",
  },
  {
    id: 1803,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1804,
    word: "above",
    translation: "выше",
  },
  {
    id: 1805,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1806,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1807,
    word: "across",
    translation: "через",
  },
  {
    id: 1808,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1809,
    word: "action",
    translation: "действие",
  },
  {
    id: 1810,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1811,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1812,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1813,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1814,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1815,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1816,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1817,
    word: "after",
    translation: "после",
  },
  {
    id: 1818,
    word: "again",
    translation: "снова",
  },
  {
    id: 1819,
    word: "against",
    translation: "против",
  },
  {
    id: 1820,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1821,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1822,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1823,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1824,
    word: "all",
    translation: "все",
  },
  {
    id: 1825,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1826,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1827,
    word: "alone",
    translation: "один",
  },
  {
    id: 1828,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1829,
    word: "already",
    translation: "уже",
  },
  {
    id: 1830,
    word: "also",
    translation: "также",
  },
  {
    id: 1831,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1832,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1833,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1834,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1835,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1836,
    word: "and",
    translation: "и",
  },
  {
    id: 1837,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1838,
    word: "another",
    translation: "другой",
  },
  {
    id: 1839,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1840,
    word: "any",
    translation: "любой",
  },
  {
    id: 1841,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1842,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1843,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1844,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1845,
    word: "area",
    translation: "область",
  },
  {
    id: 1846,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1847,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1848,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1849,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1850,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1851,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1852,
    word: "able",
    translation: "способный",
  },
  {
    id: 1853,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1854,
    word: "above",
    translation: "выше",
  },
  {
    id: 1855,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1856,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1857,
    word: "across",
    translation: "через",
  },
  {
    id: 1858,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1859,
    word: "action",
    translation: "действие",
  },
  {
    id: 1860,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1861,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1862,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1863,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1864,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1865,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1866,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1867,
    word: "after",
    translation: "после",
  },
  {
    id: 1868,
    word: "again",
    translation: "снова",
  },
  {
    id: 1869,
    word: "against",
    translation: "против",
  },
  {
    id: 1870,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1871,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1872,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1873,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1874,
    word: "all",
    translation: "все",
  },
  {
    id: 1875,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1876,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1877,
    word: "alone",
    translation: "один",
  },
  {
    id: 1878,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1879,
    word: "already",
    translation: "уже",
  },
  {
    id: 1880,
    word: "also",
    translation: "также",
  },
  {
    id: 1881,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1882,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1883,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1884,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1885,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1886,
    word: "and",
    translation: "и",
  },
  {
    id: 1887,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1888,
    word: "another",
    translation: "другой",
  },
  {
    id: 1889,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1890,
    word: "any",
    translation: "любой",
  },
  {
    id: 1891,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1892,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1893,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1894,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1895,
    word: "area",
    translation: "область",
  },
  {
    id: 1896,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1897,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1898,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1899,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1900,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1901,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1902,
    word: "able",
    translation: "способный",
  },
  {
    id: 1903,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1904,
    word: "above",
    translation: "выше",
  },
  {
    id: 1905,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1906,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1907,
    word: "across",
    translation: "через",
  },
  {
    id: 1908,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1909,
    word: "action",
    translation: "действие",
  },
  {
    id: 1910,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1911,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1912,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1913,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1914,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1915,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1916,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1917,
    word: "after",
    translation: "после",
  },
  {
    id: 1918,
    word: "again",
    translation: "снова",
  },
  {
    id: 1919,
    word: "against",
    translation: "против",
  },
  {
    id: 1920,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1921,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1922,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1923,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1924,
    word: "all",
    translation: "все",
  },
  {
    id: 1925,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1926,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1927,
    word: "alone",
    translation: "один",
  },
  {
    id: 1928,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1929,
    word: "already",
    translation: "уже",
  },
  {
    id: 1930,
    word: "also",
    translation: "также",
  },
  {
    id: 1931,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1932,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1933,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1934,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1935,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1936,
    word: "and",
    translation: "и",
  },
  {
    id: 1937,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1938,
    word: "another",
    translation: "другой",
  },
  {
    id: 1939,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1940,
    word: "any",
    translation: "любой",
  },
  {
    id: 1941,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1942,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1943,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1944,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1945,
    word: "area",
    translation: "область",
  },
  {
    id: 1946,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1947,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1948,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1949,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 1950,
    word: "art",
    translation: "искусство",
  },
  {
    id: 1951,
    word: "ability",
    translation: "способность",
  },
  {
    id: 1952,
    word: "able",
    translation: "способный",
  },
  {
    id: 1953,
    word: "about",
    translation: "о, около",
  },
  {
    id: 1954,
    word: "above",
    translation: "выше",
  },
  {
    id: 1955,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 1956,
    word: "account",
    translation: "счёт",
  },
  {
    id: 1957,
    word: "across",
    translation: "через",
  },
  {
    id: 1958,
    word: "act",
    translation: "действовать",
  },
  {
    id: 1959,
    word: "action",
    translation: "действие",
  },
  {
    id: 1960,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 1961,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 1962,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 1963,
    word: "address",
    translation: "адрес",
  },
  {
    id: 1964,
    word: "advice",
    translation: "совет",
  },
  {
    id: 1965,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 1966,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 1967,
    word: "after",
    translation: "после",
  },
  {
    id: 1968,
    word: "again",
    translation: "снова",
  },
  {
    id: 1969,
    word: "against",
    translation: "против",
  },
  {
    id: 1970,
    word: "age",
    translation: "возраст",
  },
  {
    id: 1971,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 1972,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 1973,
    word: "air",
    translation: "воздух",
  },
  {
    id: 1974,
    word: "all",
    translation: "все",
  },
  {
    id: 1975,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 1976,
    word: "almost",
    translation: "почти",
  },
  {
    id: 1977,
    word: "alone",
    translation: "один",
  },
  {
    id: 1978,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 1979,
    word: "already",
    translation: "уже",
  },
  {
    id: 1980,
    word: "also",
    translation: "также",
  },
  {
    id: 1981,
    word: "although",
    translation: "хотя",
  },
  {
    id: 1982,
    word: "always",
    translation: "всегда",
  },
  {
    id: 1983,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 1984,
    word: "amount",
    translation: "количество",
  },
  {
    id: 1985,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 1986,
    word: "and",
    translation: "и",
  },
  {
    id: 1987,
    word: "animal",
    translation: "животное",
  },
  {
    id: 1988,
    word: "another",
    translation: "другой",
  },
  {
    id: 1989,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 1990,
    word: "any",
    translation: "любой",
  },
  {
    id: 1991,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 1992,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 1993,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 1994,
    word: "apply",
    translation: "применять",
  },
  {
    id: 1995,
    word: "area",
    translation: "область",
  },
  {
    id: 1996,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 1997,
    word: "arm",
    translation: "рука",
  },
  {
    id: 1998,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 1999,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2000,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2001,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2002,
    word: "able",
    translation: "способный",
  },
  {
    id: 2003,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2004,
    word: "above",
    translation: "выше",
  },
  {
    id: 2005,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2006,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2007,
    word: "across",
    translation: "через",
  },
  {
    id: 2008,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2009,
    word: "action",
    translation: "действие",
  },
  {
    id: 2010,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2011,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2012,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2013,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2014,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2015,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2016,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2017,
    word: "after",
    translation: "после",
  },
  {
    id: 2018,
    word: "again",
    translation: "снова",
  },
  {
    id: 2019,
    word: "against",
    translation: "против",
  },
  {
    id: 2020,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2021,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2022,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2023,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2024,
    word: "all",
    translation: "все",
  },
  {
    id: 2025,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2026,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2027,
    word: "alone",
    translation: "один",
  },
  {
    id: 2028,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2029,
    word: "already",
    translation: "уже",
  },
  {
    id: 2030,
    word: "also",
    translation: "также",
  },
  {
    id: 2031,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2032,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2033,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2034,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2035,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2036,
    word: "and",
    translation: "и",
  },
  {
    id: 2037,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2038,
    word: "another",
    translation: "другой",
  },
  {
    id: 2039,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2040,
    word: "any",
    translation: "любой",
  },
  {
    id: 2041,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2042,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2043,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2044,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2045,
    word: "area",
    translation: "область",
  },
  {
    id: 2046,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2047,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2048,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2049,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2050,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2051,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2052,
    word: "able",
    translation: "способный",
  },
  {
    id: 2053,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2054,
    word: "above",
    translation: "выше",
  },
  {
    id: 2055,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2056,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2057,
    word: "across",
    translation: "через",
  },
  {
    id: 2058,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2059,
    word: "action",
    translation: "действие",
  },
  {
    id: 2060,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2061,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2062,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2063,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2064,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2065,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2066,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2067,
    word: "after",
    translation: "после",
  },
  {
    id: 2068,
    word: "again",
    translation: "снова",
  },
  {
    id: 2069,
    word: "against",
    translation: "против",
  },
  {
    id: 2070,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2071,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2072,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2073,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2074,
    word: "all",
    translation: "все",
  },
  {
    id: 2075,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2076,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2077,
    word: "alone",
    translation: "один",
  },
  {
    id: 2078,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2079,
    word: "already",
    translation: "уже",
  },
  {
    id: 2080,
    word: "also",
    translation: "также",
  },
  {
    id: 2081,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2082,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2083,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2084,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2085,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2086,
    word: "and",
    translation: "и",
  },
  {
    id: 2087,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2088,
    word: "another",
    translation: "другой",
  },
  {
    id: 2089,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2090,
    word: "any",
    translation: "любой",
  },
  {
    id: 2091,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2092,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2093,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2094,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2095,
    word: "area",
    translation: "область",
  },
  {
    id: 2096,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2097,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2098,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2099,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2100,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2101,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2102,
    word: "able",
    translation: "способный",
  },
  {
    id: 2103,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2104,
    word: "above",
    translation: "выше",
  },
  {
    id: 2105,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2106,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2107,
    word: "across",
    translation: "через",
  },
  {
    id: 2108,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2109,
    word: "action",
    translation: "действие",
  },
  {
    id: 2110,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2111,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2112,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2113,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2114,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2115,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2116,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2117,
    word: "after",
    translation: "после",
  },
  {
    id: 2118,
    word: "again",
    translation: "снова",
  },
  {
    id: 2119,
    word: "against",
    translation: "против",
  },
  {
    id: 2120,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2121,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2122,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2123,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2124,
    word: "all",
    translation: "все",
  },
  {
    id: 2125,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2126,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2127,
    word: "alone",
    translation: "один",
  },
  {
    id: 2128,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2129,
    word: "already",
    translation: "уже",
  },
  {
    id: 2130,
    word: "also",
    translation: "также",
  },
  {
    id: 2131,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2132,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2133,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2134,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2135,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2136,
    word: "and",
    translation: "и",
  },
  {
    id: 2137,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2138,
    word: "another",
    translation: "другой",
  },
  {
    id: 2139,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2140,
    word: "any",
    translation: "любой",
  },
  {
    id: 2141,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2142,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2143,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2144,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2145,
    word: "area",
    translation: "область",
  },
  {
    id: 2146,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2147,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2148,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2149,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2150,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2151,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2152,
    word: "able",
    translation: "способный",
  },
  {
    id: 2153,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2154,
    word: "above",
    translation: "выше",
  },
  {
    id: 2155,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2156,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2157,
    word: "across",
    translation: "через",
  },
  {
    id: 2158,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2159,
    word: "action",
    translation: "действие",
  },
  {
    id: 2160,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2161,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2162,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2163,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2164,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2165,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2166,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2167,
    word: "after",
    translation: "после",
  },
  {
    id: 2168,
    word: "again",
    translation: "снова",
  },
  {
    id: 2169,
    word: "against",
    translation: "против",
  },
  {
    id: 2170,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2171,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2172,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2173,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2174,
    word: "all",
    translation: "все",
  },
  {
    id: 2175,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2176,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2177,
    word: "alone",
    translation: "один",
  },
  {
    id: 2178,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2179,
    word: "already",
    translation: "уже",
  },
  {
    id: 2180,
    word: "also",
    translation: "также",
  },
  {
    id: 2181,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2182,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2183,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2184,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2185,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2186,
    word: "and",
    translation: "и",
  },
  {
    id: 2187,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2188,
    word: "another",
    translation: "другой",
  },
  {
    id: 2189,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2190,
    word: "any",
    translation: "любой",
  },
  {
    id: 2191,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2192,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2193,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2194,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2195,
    word: "area",
    translation: "область",
  },
  {
    id: 2196,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2197,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2198,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2199,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2200,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2201,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2202,
    word: "able",
    translation: "способный",
  },
  {
    id: 2203,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2204,
    word: "above",
    translation: "выше",
  },
  {
    id: 2205,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2206,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2207,
    word: "across",
    translation: "через",
  },
  {
    id: 2208,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2209,
    word: "action",
    translation: "действие",
  },
  {
    id: 2210,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2211,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2212,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2213,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2214,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2215,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2216,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2217,
    word: "after",
    translation: "после",
  },
  {
    id: 2218,
    word: "again",
    translation: "снова",
  },
  {
    id: 2219,
    word: "against",
    translation: "против",
  },
  {
    id: 2220,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2221,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2222,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2223,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2224,
    word: "all",
    translation: "все",
  },
  {
    id: 2225,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2226,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2227,
    word: "alone",
    translation: "один",
  },
  {
    id: 2228,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2229,
    word: "already",
    translation: "уже",
  },
  {
    id: 2230,
    word: "also",
    translation: "также",
  },
  {
    id: 2231,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2232,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2233,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2234,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2235,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2236,
    word: "and",
    translation: "и",
  },
  {
    id: 2237,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2238,
    word: "another",
    translation: "другой",
  },
  {
    id: 2239,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2240,
    word: "any",
    translation: "любой",
  },
  {
    id: 2241,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2242,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2243,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2244,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2245,
    word: "area",
    translation: "область",
  },
  {
    id: 2246,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2247,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2248,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2249,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2250,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2251,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2252,
    word: "able",
    translation: "способный",
  },
  {
    id: 2253,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2254,
    word: "above",
    translation: "выше",
  },
  {
    id: 2255,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2256,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2257,
    word: "across",
    translation: "через",
  },
  {
    id: 2258,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2259,
    word: "action",
    translation: "действие",
  },
  {
    id: 2260,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2261,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2262,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2263,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2264,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2265,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2266,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2267,
    word: "after",
    translation: "после",
  },
  {
    id: 2268,
    word: "again",
    translation: "снова",
  },
  {
    id: 2269,
    word: "against",
    translation: "против",
  },
  {
    id: 2270,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2271,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2272,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2273,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2274,
    word: "all",
    translation: "все",
  },
  {
    id: 2275,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2276,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2277,
    word: "alone",
    translation: "один",
  },
  {
    id: 2278,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2279,
    word: "already",
    translation: "уже",
  },
  {
    id: 2280,
    word: "also",
    translation: "также",
  },
  {
    id: 2281,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2282,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2283,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2284,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2285,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2286,
    word: "and",
    translation: "и",
  },
  {
    id: 2287,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2288,
    word: "another",
    translation: "другой",
  },
  {
    id: 2289,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2290,
    word: "any",
    translation: "любой",
  },
  {
    id: 2291,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2292,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2293,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2294,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2295,
    word: "area",
    translation: "область",
  },
  {
    id: 2296,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2297,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2298,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2299,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2300,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2301,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2302,
    word: "able",
    translation: "способный",
  },
  {
    id: 2303,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2304,
    word: "above",
    translation: "выше",
  },
  {
    id: 2305,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2306,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2307,
    word: "across",
    translation: "через",
  },
  {
    id: 2308,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2309,
    word: "action",
    translation: "действие",
  },
  {
    id: 2310,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2311,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2312,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2313,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2314,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2315,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2316,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2317,
    word: "after",
    translation: "после",
  },
  {
    id: 2318,
    word: "again",
    translation: "снова",
  },
  {
    id: 2319,
    word: "against",
    translation: "против",
  },
  {
    id: 2320,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2321,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2322,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2323,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2324,
    word: "all",
    translation: "все",
  },
  {
    id: 2325,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2326,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2327,
    word: "alone",
    translation: "один",
  },
  {
    id: 2328,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2329,
    word: "already",
    translation: "уже",
  },
  {
    id: 2330,
    word: "also",
    translation: "также",
  },
  {
    id: 2331,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2332,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2333,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2334,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2335,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2336,
    word: "and",
    translation: "и",
  },
  {
    id: 2337,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2338,
    word: "another",
    translation: "другой",
  },
  {
    id: 2339,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2340,
    word: "any",
    translation: "любой",
  },
  {
    id: 2341,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2342,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2343,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2344,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2345,
    word: "area",
    translation: "область",
  },
  {
    id: 2346,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2347,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2348,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2349,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2350,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2351,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2352,
    word: "able",
    translation: "способный",
  },
  {
    id: 2353,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2354,
    word: "above",
    translation: "выше",
  },
  {
    id: 2355,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2356,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2357,
    word: "across",
    translation: "через",
  },
  {
    id: 2358,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2359,
    word: "action",
    translation: "действие",
  },
  {
    id: 2360,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2361,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2362,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2363,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2364,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2365,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2366,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2367,
    word: "after",
    translation: "после",
  },
  {
    id: 2368,
    word: "again",
    translation: "снова",
  },
  {
    id: 2369,
    word: "against",
    translation: "против",
  },
  {
    id: 2370,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2371,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2372,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2373,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2374,
    word: "all",
    translation: "все",
  },
  {
    id: 2375,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2376,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2377,
    word: "alone",
    translation: "один",
  },
  {
    id: 2378,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2379,
    word: "already",
    translation: "уже",
  },
  {
    id: 2380,
    word: "also",
    translation: "также",
  },
  {
    id: 2381,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2382,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2383,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2384,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2385,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2386,
    word: "and",
    translation: "и",
  },
  {
    id: 2387,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2388,
    word: "another",
    translation: "другой",
  },
  {
    id: 2389,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2390,
    word: "any",
    translation: "любой",
  },
  {
    id: 2391,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2392,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2393,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2394,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2395,
    word: "area",
    translation: "область",
  },
  {
    id: 2396,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2397,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2398,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2399,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2400,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2401,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2402,
    word: "able",
    translation: "способный",
  },
  {
    id: 2403,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2404,
    word: "above",
    translation: "выше",
  },
  {
    id: 2405,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2406,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2407,
    word: "across",
    translation: "через",
  },
  {
    id: 2408,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2409,
    word: "action",
    translation: "действие",
  },
  {
    id: 2410,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2411,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2412,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2413,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2414,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2415,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2416,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2417,
    word: "after",
    translation: "после",
  },
  {
    id: 2418,
    word: "again",
    translation: "снова",
  },
  {
    id: 2419,
    word: "against",
    translation: "против",
  },
  {
    id: 2420,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2421,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2422,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2423,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2424,
    word: "all",
    translation: "все",
  },
  {
    id: 2425,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2426,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2427,
    word: "alone",
    translation: "один",
  },
  {
    id: 2428,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2429,
    word: "already",
    translation: "уже",
  },
  {
    id: 2430,
    word: "also",
    translation: "также",
  },
  {
    id: 2431,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2432,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2433,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2434,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2435,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2436,
    word: "and",
    translation: "и",
  },
  {
    id: 2437,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2438,
    word: "another",
    translation: "другой",
  },
  {
    id: 2439,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2440,
    word: "any",
    translation: "любой",
  },
  {
    id: 2441,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2442,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2443,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2444,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2445,
    word: "area",
    translation: "область",
  },
  {
    id: 2446,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2447,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2448,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2449,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2450,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2451,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2452,
    word: "able",
    translation: "способный",
  },
  {
    id: 2453,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2454,
    word: "above",
    translation: "выше",
  },
  {
    id: 2455,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2456,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2457,
    word: "across",
    translation: "через",
  },
  {
    id: 2458,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2459,
    word: "action",
    translation: "действие",
  },
  {
    id: 2460,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2461,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2462,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2463,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2464,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2465,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2466,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2467,
    word: "after",
    translation: "после",
  },
  {
    id: 2468,
    word: "again",
    translation: "снова",
  },
  {
    id: 2469,
    word: "against",
    translation: "против",
  },
  {
    id: 2470,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2471,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2472,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2473,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2474,
    word: "all",
    translation: "все",
  },
  {
    id: 2475,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2476,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2477,
    word: "alone",
    translation: "один",
  },
  {
    id: 2478,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2479,
    word: "already",
    translation: "уже",
  },
  {
    id: 2480,
    word: "also",
    translation: "также",
  },
  {
    id: 2481,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2482,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2483,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2484,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2485,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2486,
    word: "and",
    translation: "и",
  },
  {
    id: 2487,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2488,
    word: "another",
    translation: "другой",
  },
  {
    id: 2489,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2490,
    word: "any",
    translation: "любой",
  },
  {
    id: 2491,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2492,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2493,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2494,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2495,
    word: "area",
    translation: "область",
  },
  {
    id: 2496,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2497,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2498,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2499,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2500,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2501,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2502,
    word: "able",
    translation: "способный",
  },
  {
    id: 2503,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2504,
    word: "above",
    translation: "выше",
  },
  {
    id: 2505,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2506,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2507,
    word: "across",
    translation: "через",
  },
  {
    id: 2508,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2509,
    word: "action",
    translation: "действие",
  },
  {
    id: 2510,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2511,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2512,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2513,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2514,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2515,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2516,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2517,
    word: "after",
    translation: "после",
  },
  {
    id: 2518,
    word: "again",
    translation: "снова",
  },
  {
    id: 2519,
    word: "against",
    translation: "против",
  },
  {
    id: 2520,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2521,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2522,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2523,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2524,
    word: "all",
    translation: "все",
  },
  {
    id: 2525,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2526,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2527,
    word: "alone",
    translation: "один",
  },
  {
    id: 2528,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2529,
    word: "already",
    translation: "уже",
  },
  {
    id: 2530,
    word: "also",
    translation: "также",
  },
  {
    id: 2531,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2532,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2533,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2534,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2535,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2536,
    word: "and",
    translation: "и",
  },
  {
    id: 2537,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2538,
    word: "another",
    translation: "другой",
  },
  {
    id: 2539,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2540,
    word: "any",
    translation: "любой",
  },
  {
    id: 2541,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2542,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2543,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2544,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2545,
    word: "area",
    translation: "область",
  },
  {
    id: 2546,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2547,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2548,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2549,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2550,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2551,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2552,
    word: "able",
    translation: "способный",
  },
  {
    id: 2553,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2554,
    word: "above",
    translation: "выше",
  },
  {
    id: 2555,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2556,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2557,
    word: "across",
    translation: "через",
  },
  {
    id: 2558,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2559,
    word: "action",
    translation: "действие",
  },
  {
    id: 2560,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2561,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2562,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2563,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2564,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2565,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2566,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2567,
    word: "after",
    translation: "после",
  },
  {
    id: 2568,
    word: "again",
    translation: "снова",
  },
  {
    id: 2569,
    word: "against",
    translation: "против",
  },
  {
    id: 2570,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2571,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2572,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2573,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2574,
    word: "all",
    translation: "все",
  },
  {
    id: 2575,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2576,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2577,
    word: "alone",
    translation: "один",
  },
  {
    id: 2578,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2579,
    word: "already",
    translation: "уже",
  },
  {
    id: 2580,
    word: "also",
    translation: "также",
  },
  {
    id: 2581,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2582,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2583,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2584,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2585,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2586,
    word: "and",
    translation: "и",
  },
  {
    id: 2587,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2588,
    word: "another",
    translation: "другой",
  },
  {
    id: 2589,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2590,
    word: "any",
    translation: "любой",
  },
  {
    id: 2591,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2592,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2593,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2594,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2595,
    word: "area",
    translation: "область",
  },
  {
    id: 2596,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2597,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2598,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2599,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2600,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2601,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2602,
    word: "able",
    translation: "способный",
  },
  {
    id: 2603,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2604,
    word: "above",
    translation: "выше",
  },
  {
    id: 2605,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2606,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2607,
    word: "across",
    translation: "через",
  },
  {
    id: 2608,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2609,
    word: "action",
    translation: "действие",
  },
  {
    id: 2610,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2611,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2612,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2613,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2614,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2615,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2616,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2617,
    word: "after",
    translation: "после",
  },
  {
    id: 2618,
    word: "again",
    translation: "снова",
  },
  {
    id: 2619,
    word: "against",
    translation: "против",
  },
  {
    id: 2620,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2621,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2622,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2623,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2624,
    word: "all",
    translation: "все",
  },
  {
    id: 2625,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2626,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2627,
    word: "alone",
    translation: "один",
  },
  {
    id: 2628,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2629,
    word: "already",
    translation: "уже",
  },
  {
    id: 2630,
    word: "also",
    translation: "также",
  },
  {
    id: 2631,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2632,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2633,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2634,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2635,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2636,
    word: "and",
    translation: "и",
  },
  {
    id: 2637,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2638,
    word: "another",
    translation: "другой",
  },
  {
    id: 2639,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2640,
    word: "any",
    translation: "любой",
  },
  {
    id: 2641,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2642,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2643,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2644,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2645,
    word: "area",
    translation: "область",
  },
  {
    id: 2646,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2647,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2648,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2649,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2650,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2651,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2652,
    word: "able",
    translation: "способный",
  },
  {
    id: 2653,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2654,
    word: "above",
    translation: "выше",
  },
  {
    id: 2655,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2656,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2657,
    word: "across",
    translation: "через",
  },
  {
    id: 2658,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2659,
    word: "action",
    translation: "действие",
  },
  {
    id: 2660,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2661,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2662,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2663,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2664,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2665,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2666,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2667,
    word: "after",
    translation: "после",
  },
  {
    id: 2668,
    word: "again",
    translation: "снова",
  },
  {
    id: 2669,
    word: "against",
    translation: "против",
  },
  {
    id: 2670,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2671,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2672,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2673,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2674,
    word: "all",
    translation: "все",
  },
  {
    id: 2675,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2676,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2677,
    word: "alone",
    translation: "один",
  },
  {
    id: 2678,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2679,
    word: "already",
    translation: "уже",
  },
  {
    id: 2680,
    word: "also",
    translation: "также",
  },
  {
    id: 2681,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2682,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2683,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2684,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2685,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2686,
    word: "and",
    translation: "и",
  },
  {
    id: 2687,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2688,
    word: "another",
    translation: "другой",
  },
  {
    id: 2689,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2690,
    word: "any",
    translation: "любой",
  },
  {
    id: 2691,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2692,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2693,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2694,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2695,
    word: "area",
    translation: "область",
  },
  {
    id: 2696,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2697,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2698,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2699,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2700,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2701,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2702,
    word: "able",
    translation: "способный",
  },
  {
    id: 2703,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2704,
    word: "above",
    translation: "выше",
  },
  {
    id: 2705,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2706,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2707,
    word: "across",
    translation: "через",
  },
  {
    id: 2708,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2709,
    word: "action",
    translation: "действие",
  },
  {
    id: 2710,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2711,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2712,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2713,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2714,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2715,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2716,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2717,
    word: "after",
    translation: "после",
  },
  {
    id: 2718,
    word: "again",
    translation: "снова",
  },
  {
    id: 2719,
    word: "against",
    translation: "против",
  },
  {
    id: 2720,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2721,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2722,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2723,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2724,
    word: "all",
    translation: "все",
  },
  {
    id: 2725,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2726,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2727,
    word: "alone",
    translation: "один",
  },
  {
    id: 2728,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2729,
    word: "already",
    translation: "уже",
  },
  {
    id: 2730,
    word: "also",
    translation: "также",
  },
  {
    id: 2731,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2732,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2733,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2734,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2735,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2736,
    word: "and",
    translation: "и",
  },
  {
    id: 2737,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2738,
    word: "another",
    translation: "другой",
  },
  {
    id: 2739,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2740,
    word: "any",
    translation: "любой",
  },
  {
    id: 2741,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2742,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2743,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2744,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2745,
    word: "area",
    translation: "область",
  },
  {
    id: 2746,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2747,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2748,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2749,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2750,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2751,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2752,
    word: "able",
    translation: "способный",
  },
  {
    id: 2753,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2754,
    word: "above",
    translation: "выше",
  },
  {
    id: 2755,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2756,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2757,
    word: "across",
    translation: "через",
  },
  {
    id: 2758,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2759,
    word: "action",
    translation: "действие",
  },
  {
    id: 2760,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2761,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2762,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2763,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2764,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2765,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2766,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2767,
    word: "after",
    translation: "после",
  },
  {
    id: 2768,
    word: "again",
    translation: "снова",
  },
  {
    id: 2769,
    word: "against",
    translation: "против",
  },
  {
    id: 2770,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2771,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2772,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2773,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2774,
    word: "all",
    translation: "все",
  },
  {
    id: 2775,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2776,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2777,
    word: "alone",
    translation: "один",
  },
  {
    id: 2778,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2779,
    word: "already",
    translation: "уже",
  },
  {
    id: 2780,
    word: "also",
    translation: "также",
  },
  {
    id: 2781,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2782,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2783,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2784,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2785,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2786,
    word: "and",
    translation: "и",
  },
  {
    id: 2787,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2788,
    word: "another",
    translation: "другой",
  },
  {
    id: 2789,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2790,
    word: "any",
    translation: "любой",
  },
  {
    id: 2791,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2792,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2793,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2794,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2795,
    word: "area",
    translation: "область",
  },
  {
    id: 2796,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2797,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2798,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2799,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2800,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2801,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2802,
    word: "able",
    translation: "способный",
  },
  {
    id: 2803,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2804,
    word: "above",
    translation: "выше",
  },
  {
    id: 2805,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2806,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2807,
    word: "across",
    translation: "через",
  },
  {
    id: 2808,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2809,
    word: "action",
    translation: "действие",
  },
  {
    id: 2810,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2811,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2812,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2813,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2814,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2815,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2816,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2817,
    word: "after",
    translation: "после",
  },
  {
    id: 2818,
    word: "again",
    translation: "снова",
  },
  {
    id: 2819,
    word: "against",
    translation: "против",
  },
  {
    id: 2820,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2821,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2822,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2823,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2824,
    word: "all",
    translation: "все",
  },
  {
    id: 2825,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2826,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2827,
    word: "alone",
    translation: "один",
  },
  {
    id: 2828,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2829,
    word: "already",
    translation: "уже",
  },
  {
    id: 2830,
    word: "also",
    translation: "также",
  },
  {
    id: 2831,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2832,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2833,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2834,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2835,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2836,
    word: "and",
    translation: "и",
  },
  {
    id: 2837,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2838,
    word: "another",
    translation: "другой",
  },
  {
    id: 2839,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2840,
    word: "any",
    translation: "любой",
  },
  {
    id: 2841,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2842,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2843,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2844,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2845,
    word: "area",
    translation: "область",
  },
  {
    id: 2846,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2847,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2848,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2849,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2850,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2851,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2852,
    word: "able",
    translation: "способный",
  },
  {
    id: 2853,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2854,
    word: "above",
    translation: "выше",
  },
  {
    id: 2855,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2856,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2857,
    word: "across",
    translation: "через",
  },
  {
    id: 2858,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2859,
    word: "action",
    translation: "действие",
  },
  {
    id: 2860,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2861,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2862,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2863,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2864,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2865,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2866,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2867,
    word: "after",
    translation: "после",
  },
  {
    id: 2868,
    word: "again",
    translation: "снова",
  },
  {
    id: 2869,
    word: "against",
    translation: "против",
  },
  {
    id: 2870,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2871,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2872,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2873,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2874,
    word: "all",
    translation: "все",
  },
  {
    id: 2875,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2876,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2877,
    word: "alone",
    translation: "один",
  },
  {
    id: 2878,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2879,
    word: "already",
    translation: "уже",
  },
  {
    id: 2880,
    word: "also",
    translation: "также",
  },
  {
    id: 2881,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2882,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2883,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2884,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2885,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2886,
    word: "and",
    translation: "и",
  },
  {
    id: 2887,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2888,
    word: "another",
    translation: "другой",
  },
  {
    id: 2889,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2890,
    word: "any",
    translation: "любой",
  },
  {
    id: 2891,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2892,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2893,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2894,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2895,
    word: "area",
    translation: "область",
  },
  {
    id: 2896,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2897,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2898,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2899,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2900,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2901,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2902,
    word: "able",
    translation: "способный",
  },
  {
    id: 2903,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2904,
    word: "above",
    translation: "выше",
  },
  {
    id: 2905,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2906,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2907,
    word: "across",
    translation: "через",
  },
  {
    id: 2908,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2909,
    word: "action",
    translation: "действие",
  },
  {
    id: 2910,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2911,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2912,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2913,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2914,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2915,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2916,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2917,
    word: "after",
    translation: "после",
  },
  {
    id: 2918,
    word: "again",
    translation: "снова",
  },
  {
    id: 2919,
    word: "against",
    translation: "против",
  },
  {
    id: 2920,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2921,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2922,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2923,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2924,
    word: "all",
    translation: "все",
  },
  {
    id: 2925,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2926,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2927,
    word: "alone",
    translation: "один",
  },
  {
    id: 2928,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2929,
    word: "already",
    translation: "уже",
  },
  {
    id: 2930,
    word: "also",
    translation: "также",
  },
  {
    id: 2931,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2932,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2933,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2934,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2935,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2936,
    word: "and",
    translation: "и",
  },
  {
    id: 2937,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2938,
    word: "another",
    translation: "другой",
  },
  {
    id: 2939,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2940,
    word: "any",
    translation: "любой",
  },
  {
    id: 2941,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2942,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2943,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2944,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2945,
    word: "area",
    translation: "область",
  },
  {
    id: 2946,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2947,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2948,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2949,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 2950,
    word: "art",
    translation: "искусство",
  },
  {
    id: 2951,
    word: "ability",
    translation: "способность",
  },
  {
    id: 2952,
    word: "able",
    translation: "способный",
  },
  {
    id: 2953,
    word: "about",
    translation: "о, около",
  },
  {
    id: 2954,
    word: "above",
    translation: "выше",
  },
  {
    id: 2955,
    word: "accept",
    translation: "принимать",
  },
  {
    id: 2956,
    word: "account",
    translation: "счёт",
  },
  {
    id: 2957,
    word: "across",
    translation: "через",
  },
  {
    id: 2958,
    word: "act",
    translation: "действовать",
  },
  {
    id: 2959,
    word: "action",
    translation: "действие",
  },
  {
    id: 2960,
    word: "activity",
    translation: "деятельность",
  },
  {
    id: 2961,
    word: "actually",
    translation: "на самом деле",
  },
  {
    id: 2962,
    word: "add",
    translation: "добавлять",
  },
  {
    id: 2963,
    word: "address",
    translation: "адрес",
  },
  {
    id: 2964,
    word: "advice",
    translation: "совет",
  },
  {
    id: 2965,
    word: "affect",
    translation: "влиять",
  },
  {
    id: 2966,
    word: "afraid",
    translation: "бояться",
  },
  {
    id: 2967,
    word: "after",
    translation: "после",
  },
  {
    id: 2968,
    word: "again",
    translation: "снова",
  },
  {
    id: 2969,
    word: "against",
    translation: "против",
  },
  {
    id: 2970,
    word: "age",
    translation: "возраст",
  },
  {
    id: 2971,
    word: "agency",
    translation: "агентство",
  },
  {
    id: 2972,
    word: "agree",
    translation: "соглашаться",
  },
  {
    id: 2973,
    word: "air",
    translation: "воздух",
  },
  {
    id: 2974,
    word: "all",
    translation: "все",
  },
  {
    id: 2975,
    word: "allow",
    translation: "позволять",
  },
  {
    id: 2976,
    word: "almost",
    translation: "почти",
  },
  {
    id: 2977,
    word: "alone",
    translation: "один",
  },
  {
    id: 2978,
    word: "along",
    translation: "вдоль",
  },
  {
    id: 2979,
    word: "already",
    translation: "уже",
  },
  {
    id: 2980,
    word: "also",
    translation: "также",
  },
  {
    id: 2981,
    word: "although",
    translation: "хотя",
  },
  {
    id: 2982,
    word: "always",
    translation: "всегда",
  },
  {
    id: 2983,
    word: "amazing",
    translation: "удивительный",
  },
  {
    id: 2984,
    word: "amount",
    translation: "количество",
  },
  {
    id: 2985,
    word: "analysis",
    translation: "анализ",
  },
  {
    id: 2986,
    word: "and",
    translation: "и",
  },
  {
    id: 2987,
    word: "animal",
    translation: "животное",
  },
  {
    id: 2988,
    word: "another",
    translation: "другой",
  },
  {
    id: 2989,
    word: "answer",
    translation: "ответ",
  },
  {
    id: 2990,
    word: "any",
    translation: "любой",
  },
  {
    id: 2991,
    word: "anyone",
    translation: "кто-нибудь",
  },
  {
    id: 2992,
    word: "anything",
    translation: "что-нибудь",
  },
  {
    id: 2993,
    word: "appear",
    translation: "появляться",
  },
  {
    id: 2994,
    word: "apply",
    translation: "применять",
  },
  {
    id: 2995,
    word: "area",
    translation: "область",
  },
  {
    id: 2996,
    word: "argue",
    translation: "спорить",
  },
  {
    id: 2997,
    word: "arm",
    translation: "рука",
  },
  {
    id: 2998,
    word: "around",
    translation: "вокруг",
  },
  {
    id: 2999,
    word: "arrive",
    translation: "прибывать",
  },
  {
    id: 3000,
    word: "art",
    translation: "искусство",
  },
];
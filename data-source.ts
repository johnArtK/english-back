import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '111',
  database: 'english_db',
  synchronize: false,
  logging: true,
  entities: [__dirname + '/**/entitys/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'], // укажи .ts, т.к. ты используешь ts-node
  subscribers: [],
});

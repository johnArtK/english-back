import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Word } from '../../Word/entitys/word.entity';
import { UserWord } from '../../Word/entitys/userWord.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => UserWord, (userWord) => userWord.user)
  userWords: UserWord[];

  // @OneToMany(() => Word, (word) => word.userId, { cascade: true })
  // words: Word[];
}
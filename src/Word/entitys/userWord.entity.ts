import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../User/entitys/user.entity";
import { Word } from "./word.entity";

@Entity()
export class UserWord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userWords, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Word, { eager: true, onDelete: 'CASCADE' })
  word: Word;

  @Column({ default: false })
  isLearned: boolean;
}
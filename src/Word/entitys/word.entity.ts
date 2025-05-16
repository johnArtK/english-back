import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../User/entitys/user.entity';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column({ default: '' })
  translation: string;

  // @ManyToOne(() => User, (user) => user.words, { onDelete: 'CASCADE' })
  // userId: number;
}

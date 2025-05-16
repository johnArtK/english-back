import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

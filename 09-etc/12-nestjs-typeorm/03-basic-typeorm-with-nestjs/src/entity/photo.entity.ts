import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}

// https://www.youtube.com/watch?v=sNosL578ECo&list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&index=3

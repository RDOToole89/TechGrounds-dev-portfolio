import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToMany(() => User, { cascade: true })
  @JoinTable({
    name: 'pets_owners',
    joinColumn: {
      name: 'owner',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'pet',
      referencedColumnName: 'id',
    },
  })
  owners: User[];
}

import { Pet } from './pet.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @ManyToMany(() => Pet, { cascade: true })
  @JoinTable({
    name: 'owners_pets',
    joinColumn: {
      name: 'pet',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'owner',
      referencedColumnName: 'id',
    },
  })
  pets: Pet[];

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}

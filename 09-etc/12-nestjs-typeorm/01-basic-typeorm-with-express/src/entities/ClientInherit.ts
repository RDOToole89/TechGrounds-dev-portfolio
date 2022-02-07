import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Person } from './utils/Person';

@Entity('client_two')
export class ClientTwo extends Person {
  @Column({
    default: true, // provides a default value
    name: 'active', // provides a different name in the actual database
  })
  is_active: boolean;

  @Column({ type: 'simple-json', nullable: true }) // nullable true makes data optional
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date = new Date();

  @UpdateDateColumn()
  updated_at: Date = new Date();
}

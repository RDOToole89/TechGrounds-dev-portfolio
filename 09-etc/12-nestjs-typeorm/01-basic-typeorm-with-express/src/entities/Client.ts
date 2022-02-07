import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
    nullable: true,
  })
  balance: number;

  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  // There can be on client for MANY transactions
  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  // HERE WE DONT HAVE TO SPECIFY THE JOIN COLUMN
  // BECAUSE WE ALREADY DID THAT WITH THE BANKER

  @ManyToMany(() => Banker, { cascade: true })
  @JoinTable({
    name: 'clients_bankers',
    joinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'banker',
      referencedColumnName: 'id',
    },
  })
  bankers: Banker[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

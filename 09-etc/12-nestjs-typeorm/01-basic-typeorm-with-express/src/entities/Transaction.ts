import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  type: string;

  @Column({
    type: 'numeric',
  })
  amount: number;

  // Join Column usually on the many side not the one side
  // There can be many transactions for a single client
  @ManyToOne(() => Client, (client) => client.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

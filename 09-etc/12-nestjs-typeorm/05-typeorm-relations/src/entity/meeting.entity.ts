import { Employee } from './employee.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}

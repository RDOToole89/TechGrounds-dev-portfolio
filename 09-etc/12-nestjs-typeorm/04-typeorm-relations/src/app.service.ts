import { Employee } from './employee/entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task/entities/task.entity';
import { Meeting } from './meeting/entities/meeting.entity';
import { ContactInfo } from './contact-info/entities/contact-info.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  async seed() {
    // employee 1 CEO
    const ceo = this.employeeRepo.create({ name: 'Mr. CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'email@email.com',
      // employeeid: ceo.id
    });

    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);

    // Employee 2  manager
    const manager = this.employeeRepo.create({
      name: 'Roibin',
      manager: ceo,
    });

    const task1 = this.taskRepo.create({ name: 'Hire people' });
    this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.taskRepo.save(task2);

    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    manager.tasks = [task1, task2];
    meeting1.attendees = [ceo];
  }

  getHello(): string {
    return 'Hello World!';
  }
}

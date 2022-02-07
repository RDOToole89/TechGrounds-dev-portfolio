import { ContactInfo } from './entity/contact-info.entity';
import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Employee } from './entity/employee.entity';
import { Meeting } from './entity/meeting.entity';
import { Task } from './entity/task.entity';

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
    const ceo = this.employeeRepo.create({ name: 'Mr CEO' });
    await this.employeeRepo.save(ceo);
    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'email@email.com',
      // employeeId: ceo.id
    });
    ceoContactInfo.employee = ceo;
    console.log(ceo);
    await this.contactInfoRepo.save(ceoContactInfo);
    const manager = this.employeeRepo.create({ name: 'Roibin', manager: ceo });
    console.log(manager);
    const task1 = this.taskRepo.create({ name: 'Hire people' });
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.taskRepo.save(task2);
    manager.tasks = [task1, task2];
    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting1.attendees = [ceo];
    await this.meetingRepo.save(meeting1);
    manager.meetings = [meeting1];

    console.log(manager);

    await this.employeeRepo.save(manager);
  }

  getEmployeeById(id: number): Promise<Employee> {
    // return this.employeeRepo.findOne(id, {
    //   relations: [
    //     'manager',
    //     'directReports',
    //     'tasks',
    //     'contactInfo',
    //     'meetings',
    //   ],
    // });

    return this.employeeRepo
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  deleteEmployee(id: number): Promise<DeleteResult> {
    return this.employeeRepo.delete(id);
  }

  async createEmployee(name: string): Promise<Employee> {
    const newUser = this.employeeRepo.create({ name });

    return this.employeeRepo.save(newUser);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

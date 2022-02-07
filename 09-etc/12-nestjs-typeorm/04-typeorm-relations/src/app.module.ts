import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Meeting } from './meeting/entities/meeting.entity';
import { ContactInfo } from './contact-info/entities/contact-info.entity';
import { Employee } from './employee/entities/employee.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Employee } from './entity/employee.entity';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    const user = new Employee();
    user.name = 'Timber';

    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading employees from the database...');
    const employees = await connection.manager.find(Employee);
    console.log('Loaded employees: ', employees);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch((error) => console.log(error));

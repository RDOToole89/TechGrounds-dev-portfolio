import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Pet } from './entity/pet.entity';
import { User } from './entity/user.entity';

@Controller('users')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post()
  async createUser(@Body() User: { firstName: string }): Promise<User> {
    console.log(
      `POST ROUTE TO CREATE A NEW WITH @BODY PARAM: name: ${User.firstName}`,
    );
    const { firstName } = User;

    const newUser = await this.AppService.createUser(firstName);

    return newUser;
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    console.log('GET ALL USERS ROUTE RETURNS ARRAY OF USERS');
    const users = await this.AppService.getAll();

    return users;
  }

  @Get('/pets')
  async allUsersWithPets(): Promise<User[]> {
    console.log(
      'GET ALL USERS WITH PETS ROUTE RETURNS ARRAY OF USERS WITH PETS',
    );
    const users = await this.AppService.getUsersWithPets();

    const usersWithPets = users.filter((user) => user.pets.length);

    return usersWithPets;
  }

  @Get(':userId')
  async getUsers(@Param('userId', ParseIntPipe) userId: number): Promise<User> {
    console.log(`GET SINGLE USER ROUTE with PARAM USERID: ${userId} `);

    const user = await this.AppService.getOneById(userId);

    return user;
  }

  @Put(':userId')
  async updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('name') name: string,
  ): Promise<User> {
    console.log(
      `PUT ROUTE TO UPDATE A USER with PARAMID: ${userId} to QUERYPARAM ${name}`,
    );

    const user = await this.AppService.updateUser(userId, name);
    return user;
  }

  @Delete(':userId')
  async deleteUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('name') name?: string,
  ): Promise<User> {
    console.log(
      `DELETE ROUTE TO DELETE A USER with PARAMID: ${userId} and name QUERYPARAM ${name}`,
    );

    const user = this.AppService.deleteUser(userId);

    return user;
  }

  @Post('addpet')
  async addPet(@Body() petData: { name: string; type: string }): Promise<Pet> {
    console.log(
      `ADD PET ROUTE TO ADD A PET with @BODY name: ${petData.name} and name @BODY  type:${petData.type}`,
    );

    const { name, type } = petData;

    const pet = this.AppService.createPet(name, type);

    return pet;
  }
}

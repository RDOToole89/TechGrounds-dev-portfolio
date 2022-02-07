import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Pet } from './entity/pet.entity';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
  ) {}

  getAll(): Promise<User[]> {
    // SELECT * from user
    return this.usersRepository.find();
  }

  async getOneById(id: number): Promise<User> {
    try {
      // SELECT * from user WHERE user.id = id
      const user = await this.usersRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      // handle error
      throw error;
    }
  }

  createUser(firstName: string): Promise<User> {
    // const newUSer = new User(); newUser.name = name
    const newUser = this.usersRepository.create({ firstName });

    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, firstName: string): Promise<User> {
    const user = await this.getOneById(id);

    user.firstName = firstName;

    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);

    return this.usersRepository.remove(user);
  }

  async createPet(name: string, type: string): Promise<Pet> {
    const newPet = this.petsRepository.create({ name, type });

    return this.petsRepository.save(newPet);
  }

  // customQuery(): any {
  //   return this.usersRepository.createQueryBuilder('user').select('name');
  // }

  async getUsersWithPets(): Promise<User[]> {
    const usersRepository = getRepository(User);

    try {
      const usersWithPets = await usersRepository.find({
        relations: ['pets'],
        loadRelationIds: false,
      });

      if (usersWithPets) return usersWithPets;
    } catch (error) {
      throw new Error(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}

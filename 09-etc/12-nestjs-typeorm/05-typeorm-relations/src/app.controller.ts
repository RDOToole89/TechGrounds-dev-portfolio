import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Post()
  async createEmployee(@Body() userData: { name: string }): Promise<any> {
    return this.appService.createEmployee(userData.name);
  }

  @Get('/seed')
  async seedDb(): Promise<any> {
    await this.appService.seed();
  }

  @Get(':id')
  async getSingleUser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getEmployeeById(id);
  }

  @Delete(':id')
  async removeEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteEmployee(id);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserServices } from '../application/services/UserServices';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserServices) {}

  @Get()
  async GetAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  async CreateUserAsync(@Body('name') name: string) {
    return this.userService.createUser(name);
  }
}

import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './database/computer.service';
import {Computer} from "./database/schemas/computer";

@Controller()
export class AppController {
  constructor(private service: ComputerService) {}

  @Get('create')
  async create(): Promise<void> {
    await this.service.create({ name: 'Macbook', CPU: 'M3', RamInGb: 32 });
  }

  @Get('get')
  async getComputer(): Promise<Computer[]> {
    return await this.service.findAll();
  }
}

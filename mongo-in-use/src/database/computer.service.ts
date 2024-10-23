import { Inject, Injectable } from '@nestjs/common';
import { Computer } from './schemas/computer';
import { Model } from 'mongoose';
import { CreateComputer } from './types';

@Injectable()
export class ComputerService {
  constructor(
    @Inject('COMPUTER_MODEL')
    private computerModel: Model<Computer>,
  ) {}

  async create(createComputer: CreateComputer): Promise<Computer> {
    const createdComputer = new this.computerModel(createComputer);
    return await createdComputer.save();
  }

  async findAll(): Promise<Computer[]> {
    return await this.computerModel.find().exec();
  }
}

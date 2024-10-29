import { Controller, Get } from '@nestjs/common';
import { BookService } from './library/book-service';

@Controller()
export class AppController {
  constructor(private readonly bookService: BookService) {}

  @Get('create')
  async create() {
    return await this.bookService.create({
      title: 'New Book',
      author: 'John Doe',
      publicationYear: 2024,
    });
  }

  @Get()
  async findAll() {
    return await this.bookService.findAll();
  }
}

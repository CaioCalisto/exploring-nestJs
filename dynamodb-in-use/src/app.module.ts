import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './library/book-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BookService],
})
export class AppModule {}
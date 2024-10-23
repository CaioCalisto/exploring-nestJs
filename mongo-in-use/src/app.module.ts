import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import {ComputerService} from "./database/computer.service";
import {computerProviders} from "./database/schemas/computer.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
      ComputerService,
      ...computerProviders
  ],
})
export class AppModule {}

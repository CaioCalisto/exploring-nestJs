import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LoggerMiddleware} from "./logger/logger.middleware";
import { HousesController } from './houses/houses.controller';
import {ScheduleModule} from "@nestjs/schedule";
import {CronLogger} from "./cron-tasks/CronLogger";

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AppController, HousesController],
  providers: [AppService, CronLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes('houses');
  }
}

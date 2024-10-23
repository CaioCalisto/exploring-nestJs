import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaragesController } from './garage/garages.controller';
import { HousesController } from './houses.controller';

@Module({
  imports: [],
  controllers: [AppController, GaragesController, HousesController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import {GarageUseCase} from "./GarageUseCase";

@Module({
    controllers: [],
    providers: [GarageUseCase]
})
export class UseCaseModule {}
import { Module } from '@nestjs/common';
import { UseCaseModule } from '../userCase/useCaseModule'

@Module({
    imports: [UseCaseModule],
    controllers: [],
    providers: []
})
export class ApiModule {}
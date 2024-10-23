import {Controller, Get, UseInterceptors} from '@nestjs/common';
import {AdditionalLogInterceptor} from "../additional-log/additional-log.interceptor";
import {LogExecutionTime} from "../LogExecution";

@UseInterceptors(AdditionalLogInterceptor)
@Controller('houses')
export class HousesController {

    @Get()
    @LogExecutionTime()
    async getHello(): Promise<string> {
        await new Promise(f => setTimeout(f, 3000));
        return 'My Houses'
    }
}

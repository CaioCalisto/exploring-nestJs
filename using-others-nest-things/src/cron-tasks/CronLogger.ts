import {Injectable} from "@nestjs/common";
import {Cron} from "@nestjs/schedule";

@Injectable()
export class CronLogger {
    @Cron('* * * * * *')
    handleCron() {
        console.log('Cron Logger Called every seconds');
    }
}
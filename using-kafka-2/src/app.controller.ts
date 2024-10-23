import { Controller } from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('new-topic')
  getMessage(@Payload() message: { num: number }) {
    console.log('---------------------: ', message);
    return message;
  }
}

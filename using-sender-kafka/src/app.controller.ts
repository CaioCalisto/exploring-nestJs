import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('sender')
export class AppController {
  constructor(
    @Inject('MY_SERVICE')
    private client: ClientKafka,
  ) {}

  @Get()
  async sendMessage() {
    const producer = await this.client.connect();
    await producer.send({
      topic: 'new-topic',
      messages: [
        {
          value: JSON.stringify({ num: 1524 }),
        },
      ],
    });
  }
}

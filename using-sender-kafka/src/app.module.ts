import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: `my-sender-${uuidv4()}`,
            brokers: ['localhost:19090'],
          },
          consumer: {
            groupId: 'sender-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

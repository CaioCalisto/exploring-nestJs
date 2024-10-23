import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';
import { v4 as uuidv4 } from 'uuid';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: `consumer-${uuidv4()}`,
          brokers: ['localhost:9092'],
          logLevel: logLevel.INFO,
        },
        consumer: {
          groupId: 'consumer',
          allowAutoTopicCreation: true,
        },
      },
    },
  );

  app.listen();
}
bootstrap();

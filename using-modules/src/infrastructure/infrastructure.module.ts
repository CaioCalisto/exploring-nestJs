import { Module } from '@nestjs/common';
import { AuthenticationRepository } from './repositories/AuthenticationRepository';

@Module({
  providers: [AuthenticationRepository],
  exports: [AuthenticationRepository],
})
export class InfrastructureModule {}

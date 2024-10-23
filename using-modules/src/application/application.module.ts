import { Module } from '@nestjs/common';
import {UserServices} from "./services/UserServices";
import {AuthenticationRepository} from "../infrastructure/repositories/AuthenticationRepository";
import {InfrastructureModule} from "../infrastructure/infrastructure.module";

@Module({
    imports: [InfrastructureModule],
    providers: [
        UserServices,
        {
            provide: 'RepositoryToken',
            useClass: AuthenticationRepository
        },
    ],
    exports: [UserServices],
})
export class ApplicationModule {}

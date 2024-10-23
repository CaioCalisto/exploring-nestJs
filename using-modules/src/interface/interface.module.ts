import { Module } from '@nestjs/common';
import {ApplicationModule} from "../application/application.module";
import {UserController} from "./UserController";

@Module({
    imports: [ApplicationModule],
    controllers: [UserController]
})
export class InterfaceModule {}

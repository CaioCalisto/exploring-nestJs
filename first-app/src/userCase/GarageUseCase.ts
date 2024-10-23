import { Injectable } from '@nestjs/common';

@Injectable()
export class GarageUseCase {
    getHello(): string {
        return 'Hello FROM GarageUseCase!';
    }
}
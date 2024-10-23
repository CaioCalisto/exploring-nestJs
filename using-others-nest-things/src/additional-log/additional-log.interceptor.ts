import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {Observable, tap} from 'rxjs';

@Injectable()
export class AdditionalLogInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    console.log('Log from interceptor - BEFORE reaching controller');
    await new Promise(f => setTimeout(f, 1000));
    return next
        .handle()
        .pipe(
            tap(() => {
              console.log('Log from interceptor - AFTER reaching controller');
            })
        );
  }
}

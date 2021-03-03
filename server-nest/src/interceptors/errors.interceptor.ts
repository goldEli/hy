import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        // const response = err.response;
        // const newResponse: IResponse<any> = {
        //   status: response.statusCode,
        //   message: response.message.join(','),
        //   data: {},
        // };
        // err.response = newResponse;

        return throwError(err);
      }),
    );
  }
}

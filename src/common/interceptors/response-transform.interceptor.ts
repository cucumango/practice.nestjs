/**
 *
 */
import { BadRequestException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ResponseMessage } from 'common/decorators/response-message';
import { ResponseDto } from 'common/dto/response.dto';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, ResponseDto<T>> {
    constructor(private reflector: Reflector) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseDto<T>> {
        const status = context.switchToHttp().getResponse().statusCode;
        const message = this.reflector.get(ResponseMessage, context.getHandler());

        return next.handle().pipe(
            map((data) => {
                return {
                    message: message || 'success',
                    status: status || 200,
                    payload: data || undefined,
                };
            }),
            catchError((error) => {
                if (error.response && error.response.message && error.response.message instanceof Array) {
                    throw new BadRequestException('check request data');
                }
                throw error;
            }),
        );
    }
}

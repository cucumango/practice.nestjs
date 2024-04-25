/**
 *
 */
import { NestMiddleware } from '@nestjs/common';

export class LoggingMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        console.log('middleware LoggingMiddleware');
        next();
    }
}

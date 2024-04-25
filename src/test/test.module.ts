/**
 *
 */
import { LoggingMiddleware } from '@/test/middleware/logging.middleware';
import { TestController } from '@/test/test.controller';
import { TestService } from '@/test/test.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggingMiddleware).forRoutes('/test');
    }
}

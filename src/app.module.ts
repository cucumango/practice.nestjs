/**
 *
 */
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { GlobalModule } from '@/global/global.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        /* PostModule, */
        TestModule,
        /* AuthModule, */
        GlobalModule.forRoot(true),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}

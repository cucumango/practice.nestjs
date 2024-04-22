/**
 *
 */
import { TestController } from '@/test/test.controller';
import { TestService } from '@/test/test.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule {}

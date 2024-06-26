/**
 *
 */
import { GlobalService } from '@/global/global.service';
import { DynamicModule, Global, Module } from '@nestjs/common';

@Module({})
export class GlobalModule {
    static forRoot(isGlobal: boolean): DynamicModule {
        return {
            global: isGlobal ?? false,
            module: GlobalModule,
            providers: [GlobalService],
            exports: [GlobalService],
        };
    }
}

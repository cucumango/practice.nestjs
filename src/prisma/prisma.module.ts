/**
 *
 */
import { DynamicModule, Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {
    static forRoot(isGlobal: boolean): DynamicModule {
        return {
            global: isGlobal ?? false,
            module: PrismaModule,
        };
    }
}

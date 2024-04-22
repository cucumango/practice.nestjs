/**
 *
 */
import { ResponseTransformInterceptor } from '@/common/interceptors/response-transform.interceptor';
import { Roles } from '@/test/decorators/roles.decorator';
import { GetAdminDto } from '@/test/dto/get-admin.dto';
import { RolesGuard } from '@/test/guards/roles.guard';
import { TestService } from '@/test/test.service';
import { Controller, Get, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';

@UseGuards(RolesGuard)
@Controller('test')
@UseInterceptors(ResponseTransformInterceptor)
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getTest() {
        return 'get test OK';
    }

    @Roles(['admin'])
    @Get('/admin')
    getGuardTest() {
        return 'get admin OK';
    }

    @Get('/query')
    getQueryTest(@Query() _query: GetAdminDto) {
        return 'get query OK';
    }

    @Post()
    postTest() {
        return 'post test OK';
    }
}

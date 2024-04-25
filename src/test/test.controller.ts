/**
 *
 */
import { ResponseTransformInterceptor } from '@/common/interceptors/response-transform.interceptor';
import { Roles } from '@/test/decorators/roles.decorator';
import { User } from '@/test/decorators/user.decorator';
import { FinalFilter } from '@/test/filters/final.filter';
import { RolesGuard } from '@/test/guards/roles.guard';
import { UserIdPipe } from '@/test/pipe/user-id.pip';
import { TestService } from '@/test/test.service';
import { Controller, Get, HttpException, Post, Query, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';

@UseGuards(RolesGuard)
@Controller('test')
@UseInterceptors(ResponseTransformInterceptor)
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    @Roles(['user'])
    @UseFilters(FinalFilter)
    getTest(@Query('id', UserIdPipe) id: string, @User('id') id2) {
        console.log('controller getTest', id, id2);

        if (id.match(/^pbj$/)) {
            throw new HttpException('test error', 500);
        }

        return 'get test OK';
    }

    @Post()
    postTest() {
        return 'post test OK';
    }
}

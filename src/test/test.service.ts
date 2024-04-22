/**
 *
 */
import { GlobalService } from '@/global/global.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    constructor(private globalService: GlobalService) {}

    getTest() {
        this.globalService.print();
    }
}

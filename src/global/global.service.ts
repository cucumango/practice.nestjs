/**
 *
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
    constructor() {
        console.log('created GlobalService');
    }

    print() {
        console.log('print GlobalService');
    }
}

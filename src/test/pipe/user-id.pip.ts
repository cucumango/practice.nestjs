/**
 *
 */
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class UserIdPipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string {
        console.log('pipe UserIdPipe', value);

        if (!/^[a-zA-Z0-9]*$/.test(value)) {
            throw new BadRequestException('id is wrong');
        }
        return value;
    }
}

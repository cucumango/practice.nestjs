/**
 *
 */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { firstname, lastname } = request.query;

    console.log('decorator User', firstname, lastname);

    return `${firstname} ${lastname}`;
});

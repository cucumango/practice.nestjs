/**
 *
 */
import { Roles } from '@/test/decorators/roles.decorator';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get(Roles, context.getHandler());
        console.log('guarder RolesGuard', roles);

        // if (!roles) {
        //     return true;
        // }
        // const request = context.switchToHttp().getRequest();
        // const { id } = request.query;

        // if (roles.find((role) => role === 'admin')) {
        //     return id === 'pbj';
        // }

        return true;
    }
}

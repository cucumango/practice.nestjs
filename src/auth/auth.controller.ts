/**
 *
 */
import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { User } from '@prisma/client';
import { DefaultResponseMessage } from 'src/common/interface/default.response.message';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/sign-in')
    signIn(): void {
        return this.authService.signIn();
    }

    @Post('/sign-up')
    @UseInterceptors(ClassSerializerInterceptor)
    signUp(@Body() signUpDto: SignUpDto): DefaultResponseMessage {
        this.authService.signUp(signUpDto);
        return {
            message: 'success',
        };
    }
}

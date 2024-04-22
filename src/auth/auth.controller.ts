/**
 *
 */
import { AuthService } from '@/auth/auth.service';
import { SignInDto } from '@/auth/dto/siginin.dto';
import { SignUpDto } from '@/auth/dto/signup.dto';
import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { DefaultResponseMessage } from 'common/interface/default.response.message';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/sign-in')
    signIn(@Body() signInDto: SignInDto): Promise<boolean> {
        return this.authService.signIn(signInDto);
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

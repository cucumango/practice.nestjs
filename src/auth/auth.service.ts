/**
 *
 */
import { SignInDto } from '@/auth/dto/siginin.dto';
import { SignUpDto } from '@/auth/dto/signup.dto';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async signIn(signInDto: SignInDto): Promise<boolean> {
        const { id, password } = signInDto;
        const user: User = await this.prisma.user.findUnique({
            where: { id },
        });

        if (user && await bcrypt.compare(password, user.password)) {
            return true;
        } else {
            throw new UnauthorizedException('login failed')
        }
    }

    async signUp(signUpDto: SignUpDto): Promise<User> {
        const { id, password, type } = signUpDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        let user: User;
        try {
            user = await this.prisma.user.create({
                data: { id, password: hashedPassword, type },
            });
        } catch (error) {
            throw new BadRequestException('The same ID exists');
        }

        return user;
    }
}

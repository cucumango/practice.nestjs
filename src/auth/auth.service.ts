/**
 *
 */
import {
    BadRequestException,
    Injectable
} from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    signIn(): void {}

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

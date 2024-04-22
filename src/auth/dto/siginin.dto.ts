/**
 *
 */
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    id: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}

/**
 *
 */
import { UserType } from '@prisma/client';
import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    id: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/, {
        message:
            'The password must be 8 to 16 digits, including English numeric special characters.',
    })
    password: string;

    @IsOptional()
    @IsEnum(UserType)
    type?: UserType;
}

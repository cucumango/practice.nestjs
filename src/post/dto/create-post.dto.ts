/**
 *
 */
import { PostType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreaetPostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    authorId: string;

    @IsOptional()
    @IsEnum(PostType)
    type?: PostType;
}

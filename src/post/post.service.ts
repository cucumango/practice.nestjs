/**
 *
 */
import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreaetPostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}

    createPost(createPostDto: CreaetPostDto): Promise<Post> {
        const { title, description, authorId, type } = createPostDto;
        return this.prisma.post.create({
            data: { title, description, authorId, type },
        });
    }

    getAllPost(): Promise<Post[]> {
        return this.prisma.post.findMany({});
    }
}

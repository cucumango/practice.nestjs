/**
 *
 */
import { CreaetPostDto } from '@/post/dto/create-post.dto';
import { PostService } from '@/post/post.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as PostEntity } from '@prisma/client';

@Controller('board')
export class PostController {
    constructor(private readonly boardService: PostService) {}

    @Post()
    creaetPost(@Body() creaetPostDto: CreaetPostDto): Promise<PostEntity> {
        return this.boardService.createPost(creaetPostDto);
    }

    @Get()
    getPost(): Promise<PostEntity[]> {
        return this.boardService.getAllPost();
    }
}

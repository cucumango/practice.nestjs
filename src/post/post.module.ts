/**
 *
 */
import { PostController } from '@/post/post.controller';
import { PostService } from '@/post/post.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}

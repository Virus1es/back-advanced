import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'Create post with image'})
    @ApiResponse({status: 200, type: [Post]})
    @UseInterceptors(FileInterceptor('image'))
    @Post()
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postsService.create(dto, image)
    }
}

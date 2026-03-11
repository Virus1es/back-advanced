import {Body, Controller, Post, UploadedFile} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'Create post with image'})
    @ApiResponse({status: 200, type: [Post]})
    @Post()
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image: string) {
        return this.postsService.create(dto, image)
    }
}

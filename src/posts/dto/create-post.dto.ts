import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Any title', description: 'Post title'})
    readonly title: string;

    @ApiProperty({example: 'Some text', description: 'Content text in post'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'Unique identifier of user who create this post'})
    readonly userId: string;
}
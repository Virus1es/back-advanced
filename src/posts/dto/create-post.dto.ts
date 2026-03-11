import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Any title', description: 'Post title'})
    readonly title: string;

    @ApiProperty({example: 'Some text', description: 'Content text in post'})
    readonly content: string;

    @ApiProperty({example: 'image.jpg', description: 'Name of image that use in post'})
    readonly image: string;
}
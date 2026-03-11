import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'User unique identifier'})
    readonly userId: number;

    @ApiProperty({example: 'No enter too long', description: 'Why user are banned'})
    readonly banReason: string;
}
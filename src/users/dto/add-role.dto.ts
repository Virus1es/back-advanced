import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Name of user role'})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User unique identifier'})
    readonly userId: number;
}
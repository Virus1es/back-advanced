import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsNumber} from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Name of user role'})
    @IsString({message: 'That field must be string'})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User unique identifier'})
    @IsNumber({}, {message: 'That field must be number'})
    readonly userId: number;
}
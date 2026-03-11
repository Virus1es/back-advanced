import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Name of user role'})
    @IsString({message: 'That field must be string'})
    readonly value: string;

    @ApiProperty({example: 'Administrator in app', description: 'Description of role'})
    @IsString({message: 'That field must be string'})
    readonly description: string;
}
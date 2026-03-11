import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'User email'})
    @IsString({message: 'That field must be string'})
    @IsEmail({}, {message: 'Email is invalid'})
    readonly email: string;

    @ApiProperty({example: '12334241', description: 'User password'})
    @IsString({message: 'That field must be string'})
    @Length(4, 16, {message: 'Length are more then 4 and less tha 16'})
    readonly password: string;
}
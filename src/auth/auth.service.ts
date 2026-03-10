import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcryptjs from 'bcryptjs';
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto){
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.usersService.getUserByEmail(userDto.email);
        if(candidate) {
            throw new HttpException('User with that email already exist', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcryptjs.hash(userDto.password, 5);
        const user = await this.usersService.createUser({...userDto, password: hashPassword});
        return await this.generateToken(user);
    }

    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        }
    }
}

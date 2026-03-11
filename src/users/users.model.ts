import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'User email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    declare email: string;

    @ApiProperty({example: '12334241', description: 'User password'})
    @Column({type: DataType.STRING, allowNull: false})
    declare password: string;

    @ApiProperty({example: 'true', description: 'Are user banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    declare banned: boolean;

    @ApiProperty({example: 'Cheating', description: 'Why user are banned'})
    @Column({type: DataType.STRING,  allowNull: true})
    declare banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    declare roles: Role[];

    @HasMany(() => Post)
    declare posts: Post[];
}
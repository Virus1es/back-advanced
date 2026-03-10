import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";


@Table({tableName: 'user_roles'})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: '1', description: 'Id of user in table users'})
    @Column({type: DataType.NUMBER, unique: true, allowNull: false})
    userId: string;

    @ApiProperty({example: '1', description: 'Id of role in table roles'})
    @Column({type: DataType.NUMBER, allowNull: false})
    roleId: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
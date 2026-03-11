import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostsCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostsCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'Any title', description: 'Post title'})
    @Column({type: DataType.STRING, allowNull: false})
    declare title: string;

    @ApiProperty({example: 'Some text', description: 'Content text in post'})
    @Column({type: DataType.STRING, allowNull: false})
    declare content: string;

    @ApiProperty({example: 'image.jpg', description: 'Name of image that use in post'})
    @Column({type: DataType.STRING})
    declare image: string;

    @ApiProperty({example: '1', description: 'Unique identifier of user who create this post'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    declare userId: number;

    @BelongsTo(() => User)
    declare author: User;
}
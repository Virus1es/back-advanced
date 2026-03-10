import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../users/users.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
      SequelizeModule.forFeature([User, Role])
  ]
})
export class RolesModule {}

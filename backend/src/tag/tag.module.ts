import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";
import { TagEntity } from "./tag.entity";
import { TagService } from "./tag.service";
import { TypeOrmModule } from '@nestjs/typeorm';


//postrgres
@Module({
    imports: [TypeOrmModule.forFeature([TagEntity])],
    controllers: [TagController],
    providers: [TagService]
})
export class TagModule { }
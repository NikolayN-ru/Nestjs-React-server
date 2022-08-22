import { Controller, Get, Post } from "@nestjs/common";
// import { TagEntity } from "./tag.entity";
import { TagService } from "./tag.service";

@Controller('tags')
export class TagController {

    constructor(private tagService: TagService) { }

    @Get('tag')
    async getTags(): Promise<{ tags: string[] }> {
        const tags = await this.tagService.allTags();
        return {
            tags: tags.map(tag => tag.name),
        }
    }



}
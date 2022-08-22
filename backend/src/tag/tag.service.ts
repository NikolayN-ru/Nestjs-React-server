import { Injectable } from "@nestjs/common";
import { TagEntity } from "./tag.entity";
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TagService {

    constructor(@InjectRepository(TagEntity) private readonly tagRepository: Repository<TagEntity>) { }

    async allTags(): Promise<TagEntity[]> {
        return await this.tagRepository.find();
        // return ['a-ll-ta-gs', 'sd']
    }
}

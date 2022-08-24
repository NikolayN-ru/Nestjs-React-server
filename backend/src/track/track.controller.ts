import { CreateTrackDto } from './dto/create-track.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { TrackService } from "./track.service";
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';


@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 }
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        // console.log(files, 'files');
        const { picture, audio } = files;
        return this.trackService.create(dto, picture[0], audio[0])
    }

    @Get()
    getAll(@Query('count') count: number,
        @Query('offset') offset: number) {
        return this.trackService.getAll(count, offset)
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.trackService.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id)
    }

    @Delete(':id')
    getDelete(@Param('id') id: ObjectId) {
        return this.trackService.getDelete(id)
    }

    @Put(':id')
    getPut(@Body() param: any, @Param('id') id: ObjectId) {
        return this.trackService.getPut(id, param)
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId) {
        return this.trackService.listen(id);
    }

}
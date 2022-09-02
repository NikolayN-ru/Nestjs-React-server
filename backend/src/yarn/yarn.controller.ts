import { Body, Controller, Delete, Get, Param, Post, Put, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateCategoryYarnDto } from './dto/create-categoryYarn.dto';
import { CreateTagYarnDto } from './dto/create-tagYarn.dto';
import { CreateProductYarnDto } from './dto/crerate-productYarn.dto';
import { YarnService } from './yarn.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { UpdateExtraVariablesProductDto } from './dto/update-extraVariablesProduct.dto';

@Controller('yarn')
export class YarnController {
    constructor(private yarnService: YarnService) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    createCategory(@UploadedFiles() files, @Body() dto: CreateCategoryYarnDto) {
        return this.yarnService.createCategory(dto);
    }

    @Get()
    getAllCategory() {
        return this.yarnService.getAllCategory()
    }

    @Post('product')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    createProduct(
        @UploadedFiles() files, @Body() dto: CreateProductYarnDto) {
            console.log(dto, "dto!!!!!!!!", files, "FILES!!");
        const { picture } = files;
        return this.yarnService.createProduct(dto, picture[0]);
    }

    @Get('product')
    getAllProductYarn() {
        return this.yarnService.getAllProductYarn()
    }

    @Get('productItem/:id')
    getProductById(@Param('id') id: string) {
        return this.yarnService.getProductById(id)
    }

    // updateVariableProduct(@Param('id') id: string, @Body() dto: UpdateExtraVariablesProductDto){
    //!!! variable product! - update
    @Put('product/:id')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
    updateVariableProduct(@UploadedFiles() files, @Body() dto: any, @Param('id') id: string) {
        const { picture } = files;
        // console.log(dto, 'dto', picture, id);
        return this.yarnService.updateProduct(id, dto, picture[0]);
    }

    @Delete('product/:id')
    deleteProduct(@Param('id') id: string){
        return this.yarnService.deleteProduct(id);
    }

    @Post('tag')
    createTag(@UploadedFiles() files, @Body() dto: CreateTagYarnDto) {
        return this.yarnService.createTag(dto);
    }

    @Get('tags')
    allTags() {
        return this.yarnService.allTags();
    }
}

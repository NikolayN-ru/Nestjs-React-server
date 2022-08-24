import { Body, Controller, Get, Post, UploadedFiles } from '@nestjs/common';
import { CreateCategoryYarnDto } from './dto/create-categoryYarn.dto';
import { CreateProductYarnDto } from './dto/crerate-productYarn.dto';
import { YarnService } from './yarn.service';

@Controller('yarn')
export class YarnController {
    constructor(private yarnService: YarnService) { }

    @Post()
    createCategory(@UploadedFiles() files, @Body() dto: CreateCategoryYarnDto) {
        // const { picture } = files;
        return this.yarnService.createCategory(dto);
    }

    @Get()
    getAllCategory() {
        return this.yarnService.getAllCategory()
    }

    @Post('product')
    createProduct(@UploadedFiles() files, @Body() dto: CreateProductYarnDto){
        return this.yarnService.createProduct(dto);
    }

    @Get('product')
    getAllProductYarn() {
        return this.yarnService.getAllProductYarn()
    }
}

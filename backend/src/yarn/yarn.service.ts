import { FileService, FileType } from '@app/file/file.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryYarnDto } from './dto/create-categoryYarn.dto';
import { CreateProductYarnDto } from './dto/crerate-productYarn.dto';
import { CategoryYarn, CategoryYarnDocument } from './schemas/category.schema';
import { ProductYarn, ProductYarnDocument } from './schemas/product.scema';

@Injectable()
export class YarnService {
    constructor(
        @InjectModel(CategoryYarn.name) private categoryYarnModel: Model<CategoryYarnDocument>,
        @InjectModel(ProductYarn.name) private productYarnModel: Model<ProductYarnDocument>,
        private fileService: FileService) { }

    async createCategory(dto: CreateCategoryYarnDto): Promise<CategoryYarn> {
        // const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const categoryItem = await this.categoryYarnModel.create(dto);
        return categoryItem;
    }

    async getAllCategory() {
        const allcategory = await this.categoryYarnModel.find();
        return allcategory;
    }

    async createProduct(dto: CreateProductYarnDto): Promise<ProductYarn> {
        const product = await this.productYarnModel.create(dto);
        return product;
    }

    async getAllProductYarn() {
        const allProduct = await this.productYarnModel.find({
            where: {
                category: '630657aae12f81e79af17ca2'
            }
        });
        return allProduct;
    }
}

import { FileService, FileType } from '../file/file.service';
import { Product } from '@app/products/schemas/product.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryYarnDto } from './dto/create-categoryYarn.dto';
import { CreateTagYarnDto } from './dto/create-tagYarn.dto';
import { CreateProductYarnDto } from './dto/crerate-productYarn.dto';
import { CategoryYarn, CategoryYarnDocument } from './schemas/category.schema';
import { ProductYarn, ProductYarnDocument } from './schemas/product.scema';
import { TagsYarn, TagsYarnDocument } from './schemas/tags.schemas';

@Injectable()
export class YarnService {

    constructor(
        @InjectModel(CategoryYarn.name) private categoryYarnModel: Model<CategoryYarnDocument>,
        @InjectModel(ProductYarn.name) private productYarnModel: Model<ProductYarnDocument>,
        @InjectModel(TagsYarn.name) private tagYarnModel: Model<TagsYarnDocument>,
        private fileService: FileService) { }

    async createCategory(dto: CreateCategoryYarnDto): Promise<CategoryYarn> {
        // const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const categoryItem = await this.categoryYarnModel.create(dto);
        return categoryItem;
    }

    async getAllCategory() {
        const allcategory = await this.categoryYarnModel.find().populate('products');
        return allcategory;
    }

    async createProduct(dto: CreateProductYarnDto, picture): Promise<ProductYarn> {

        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

        const product = await this.productYarnModel.create({ ...dto, image: picturePath });
        const tag = await this.tagYarnModel.find({ title: dto.tagsA })
        product.tags.push(tag[0]._id);
        const category = await this.categoryYarnModel.find({ title: dto.categoryA });
        product.category.push(category[0]._id);
        await product.save();
        category[0].products.push(product);
        await category[0].save();
        return product;
    }

    // async deleteFile(filePath: string): Promise<void> {
    //     return await this.fileService.removeFile(filePath);
    // }

    async getAllProductYarn() {
        const allProduct = await this.productYarnModel.find().populate('tags');
        return allProduct;
    }

    async getProductFilter() {
        // const getProductFilter = await this.productYarnModel.find({ tags: $elemMatch:{ title: [...state] }} });
        const getProductFilter = await this.productYarnModel.find({
            // tags: { $exists: true}, $where: 'this.tags.length>0'
            // tags: {$size: { $gt : 1 }}
            'tags.0': {$exists: true}
        },{tags: 1}).populate({
            path: 'tags',
            match: { title: { $in: ['хлопок'] }}
        })
        console.log(getProductFilter);
        return getProductFilter;
    }

    async getProductSearch(title){
        return this.productYarnModel.find({ name: title})
    }

    // async updateProductMain(id: string, dto: CreateProductYarnDto){
    //     // обновление основных параметров продукта
    //     const productUpdate = await this.productYarnModel.update({ _id: id}, {
    //         $set: {
    //             name: dto.name,
    //         }
    //     })
    //     productUpdate.save();
    //     return productUpdate;
    // }

    async updateProduct(id, dto, picture) {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        // console.log(picturePath, 'picturePath');
        const product = await this.productYarnModel.find({ _id: id });
        product[0].extraVariables.push({ ...dto, image: picturePath });
        // console.log(dto);
        await product[0].save();
        return product;
    }

    // update product
    // вернет новый объект уже обновленный !!!
    // return this.productYarnModel.findByIdAndUpdate(id, dto, { new: true }).exec();

    async deleteProduct(id): Promise<any> {
        const file:{_id:string, image: string} = await this.productYarnModel.findOne({ _id: id },{image: 1});
        // console.log('filename - ', file.image)
        if(file.image){
            this.fileService.removeFile(file.image);
        }
        await this.productYarnModel.findByIdAndRemove(id);
        // return 
        return 'delete';
    }

    async createTag(dto: CreateTagYarnDto): Promise<any> {
        const tag = await this.tagYarnModel.create(dto);
        return tag;
    }

    async getProductById(id: string): Promise<any> {
        const product = await this.productYarnModel.find({ name: id });
        const productId = await this.productYarnModel.findById(product[0]._id).populate('category').populate('tags');
        return productId;
    }

    async allTags(): Promise<any> {
        const allTags = await this.tagYarnModel.find();
        return allTags;
    }
}

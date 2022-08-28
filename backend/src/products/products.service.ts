import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    // инжектируем модель - для взаимодействия с базой
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async getProducts(): Promise<Product[]> {
        return await this.productModel.find().exec();
        // return `all -users- ${Date.now()}`
    }

    async getById(id): Promise<Product> {
        return await this.productModel.findById(id);
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        const product = await new this.productModel(productDto);
        return await product.save();
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id);
    }

    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
    }
}

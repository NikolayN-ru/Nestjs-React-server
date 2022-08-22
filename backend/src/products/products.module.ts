import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    imports: [
        // зарегистрировали схему и можем ее использовать
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema} 
        ])
    ]
})
export class ProductsModule {}

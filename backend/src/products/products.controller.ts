import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('/products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) { }

    @Get()
    // @Redirect('https//google.com')
    // _(@Req() req:Request, @Res() res:Response) {
    // res.status(201).end('Poke')
    getAll(): Promise<Product[]> {
        return this.productService.getProducts()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto) {
        // return ` title ${createProductDto.title} Proce ${createProductDto.price}`;
        return this.productService.create(createProductDto)
    }

    @Get(':id')
    // getOne(@Param() params){
    getOne(@Param('id') id: string): Promise<Product> {
        // return 'getOne ' + params.id
        // return 'getOne ' + id;
        return this.productService.getById(id)
    }

    @Delete(':item')
    remove(@Param("item") item: string) {
        // return 'delete-Item ' + item;
        return this.productService.remove(item)
    }

    @Put(":id")
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        // return `update param ${Number(updateProductDto.price) + Number(id)} ${id}`
        return this.productService.update(id, updateProductDto);
    }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ProductYarn } from './product.scema';
// import { ProductYarn } from './product.scema';

export type CategoryYarnDocument = CategoryYarn & Document;

@Schema()
export class CategoryYarn {

    

    @Prop()
    title: string;

    @Prop()
    slug: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductYarn'}] })
    products: ProductYarn[];

}

export const CaterogyYarnSchema = SchemaFactory.createForClass(CategoryYarn);

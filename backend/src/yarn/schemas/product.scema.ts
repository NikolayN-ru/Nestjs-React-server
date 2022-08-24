import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { CategoryYarn } from "./category.schema";
import { VariablesYarn } from "./variables.schema";


export type ProductYarnDocument = ProductYarn & Document;

@Schema()
export class ProductYarn {
    @Prop()
    name: string;

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'CategorYarn'}})
    category: CategoryYarn;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    discount: number;

    @Prop()
    image: string;

    @Prop()
    extraVariables: [{number: number, color: string, count: number, price: number, image: string;}]

    @Prop( {type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VariablesYarn'}] })
    variables: VariablesYarn[];

}

export const ProductYarnSchema = SchemaFactory.createForClass(ProductYarn);

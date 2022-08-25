import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { ProductYarn } from "./product.scema";

export type TagsYarnDocument = TagsYarn & Document;

@Schema()
export class TagsYarn {
    
    @Prop()
    title: string

    // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductYarn' }] })
    // product: ProductYarn[];
}

export const TagsYarnSchema = SchemaFactory.createForClass(TagsYarn);
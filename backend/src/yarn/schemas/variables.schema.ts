import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';

export type VariablesYarnDocument = VariablesYarn & Document;

@Schema()
export class VariablesYarn {
    @Prop()
    number: string // 0020 !

    @Prop()
    color: string

    @Prop()
    count: number

    // @Prop()
    // price: number

    @Prop()
    image: string;
}

export const VariablesYarnSchema = SchemaFactory.createForClass(VariablesYarn);

import { ObjectId } from "mongoose";


export class CreateProductYarnDto {
    readonly name: string;
    readonly categoryA?: string;
    readonly tagsA?: string;
    readonly length: number;
    readonly weight: string[];
    readonly needles?: string;
    readonly country?: string;
    readonly description: string;
    readonly price?: number;
    readonly discount?: number;
    readonly image?: string;
    readonly files?: any;
    readonly extraVariables?: [{ number: number, color: string, count: number, price: number, image: string; }]
    readonly variables?: ObjectId[];
}


import { ObjectId } from "mongoose";


export class CreateProductYarnDto {
    readonly name: string;
    readonly category: ObjectId;
    readonly description: string;
    readonly price: number;
    readonly discount: number;
    readonly image: string;
    readonly extraVariables?: [{ number: number, color: string, count: number, price: number, image: string; }]
    readonly variables?: ObjectId[];
}


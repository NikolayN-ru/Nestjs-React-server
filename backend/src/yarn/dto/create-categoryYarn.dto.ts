import { ObjectId } from "mongoose";


export class CreateCategoryYarnDto {
    readonly name: string;
    readonly slug: string;
    readonly products: ObjectId[];
}
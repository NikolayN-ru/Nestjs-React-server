import { ObjectId } from "mongoose";

export class UpdateExtraVariablesProductDto {
    readonly number: number;
    readonly color: string;
    readonly count: number;
    readonly price: number;
    readonly image: string;
}

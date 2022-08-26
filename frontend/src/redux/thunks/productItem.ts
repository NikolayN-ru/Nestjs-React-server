import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export interface ProductItemMain {
    name: string;
    category: any,
    tags: any,
    length: number,
    weight: string,
    needles: string,
    country: string,
    description: string,
    price: number,
    discount: number,
    image: string,
    extraVariables: any[],
    variables: any,
}

export const getProductItem = createAsyncThunk<Array<ProductItemMain>, string | undefined, { rejectValue: { message: string } }>(
    'get/products',
    // payloadCreator,
    async (_, thunkApi) => {
        const product:any = await api.get<ProductItemMain>(`/yarn/productItem/${_}`, {

        })

        if (product.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось получить товар'
            })
        }   

        return product.data;
    }
)

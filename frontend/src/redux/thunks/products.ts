import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export interface ProductItem {
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

//Generic CreateAsyncThunk
//1 параметр - возвращаемое значение в случае fulfilled
//2 параметр - аргументы payloadCreator, которые падают в _ (первый аргумент payloadCreator)
//3 параметр - типизация thunkApi
export const getProducts = createAsyncThunk<Array<ProductItem>, void, { rejectValue: { message: string } }>(
    'get/products',
    async (_, thunkApi) => {
        const posts = await api.get<Array<ProductItem>>('/yarn/product', {
            data: { },
            headers: {}
        })

        if (posts.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось получить список товарорв'
            })
        }

        return posts.data;
    }
)

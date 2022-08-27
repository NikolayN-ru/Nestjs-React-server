import { createAsyncThunk } from "@reduxjs/toolkit";

export const setCartProduct = createAsyncThunk<Array<any>, any, { rejectValue: { message: string } }>(
    'set/cart',
    async (_, thunkApi) => {
        const product: any = _

        // console.log(product, '!!!!!!!!!!!!!');



        if (product.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось добавить товар в карзину'
            })
        }

        return product;
    }
)
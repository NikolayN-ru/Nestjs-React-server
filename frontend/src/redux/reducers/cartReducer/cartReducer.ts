import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { setCartProduct } from "../../thunks/setCartProduct";


interface CartProduct {
    id?: string;
    category?: string;
    name?: string;
    price?: number;
    image?: string;
    quantity?: number;
}

interface CartProducts {
    items: Array<CartProduct>;
}

const initialState: CartProducts | any = {
    cart: []
}

const Cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // обычный редюсер !! ?

        //убрать товар из корзины ??
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(setCartProduct.fulfilled),
                (state, action: PayloadAction<any>) => {
                    // console.log(state, 'state!!--cart');
                    // console.log(action.payload, 'action.payload');
                    state.cart.push(action.payload)
                }
            );
    },

})

export const CartProductReduser = Cart.reducer;
export const { } = Cart.actions
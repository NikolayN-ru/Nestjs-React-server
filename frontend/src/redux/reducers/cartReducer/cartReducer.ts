import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";


interface CartProduct {
    id?: string;
    category?: string;
    name?: string;
    price?: number;
    image?: string;
    quantity?: number;
    color?: string;
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
        setCartProduct(state, { payload }: PayloadAction<CartProduct>) {
            // todo - переписать нормально

            const newItem = [...state.cart];
            let s = 0;
            newItem.forEach((item: any) => {

                if (item.id === payload.id && item.color === payload.color) {
                    // console.log('ODINAKOVI ', payload.id);
                    item.quantity += payload.quantity;
                    s = 1;
                    return
                }
            })
            if (!s) { newItem.push(payload); }
            state.cart = newItem;
        },

        delCartProduct(state, { payload }: PayloadAction<CartProduct>) {
            state.cart = [...state.cart].filter(item => item.id !== payload.id || item.color !== payload.color)
        },

    },

})

export const CartProductReduser = Cart.reducer;
export const { setCartProduct, delCartProduct } = Cart.actions
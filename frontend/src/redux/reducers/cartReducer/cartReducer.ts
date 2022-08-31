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
            let s = 0;
            state.cart.forEach((item: any) => {
                if (item.id === payload.id && item.color === payload.color) {
                    // console.log('ODINAKOVI ', payload.id);
                    item.quantity += payload.quantity;
                    s = 1;
                    return
                }
            })
            if (!s) { state.cart.push(payload); }
        },

        // todo удалить товар из корзины ??
        delCartProduct(state, { payload }: PayloadAction<CartProduct>) {
            state.cart.forEach((item: any, idx: number) => {
                // console.log(state.cart[0].id, 'id-cart');
                if (item.id === payload.id && item.color === payload.color) {
                    // console.log('item-delete - product', item.id, idx);
                    item.quantity = 0;
                    // const newState = [...state.cart(0, idx + 1), ...state.cart(idx)]
                    // state.cart = newState
                }
            })
        },
    },

})

export const CartProductReduser = Cart.reducer;
export const { setCartProduct, delCartProduct } = Cart.actions
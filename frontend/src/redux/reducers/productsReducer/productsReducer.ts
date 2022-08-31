import {createSlice, isAnyOf, PayloadAction, Slice} from "@reduxjs/toolkit";
import { getProducts, ProductItem } from "../../thunks/products";


 interface ProductsState {
 	all: Array<ProductItem>
 }

 const initialState: ProductsState = {
 	all: []
 }


 const Products: Slice<ProductsState, any, any> = createSlice({
 	name: 'products',
 	initialState,
 	reducers: { 
		filterProducts(state:any, { payload }: PayloadAction<any>) {
            // todo filter price
            console.log(payload, state.all);
            state.all.forEach((item: any) => {console.log(item.name)});
        },
	},

 	extraReducers: (builder) => {
 		builder
			 .addMatcher(
				isAnyOf(getProducts.fulfilled),
				(state, action: PayloadAction<Array<ProductItem>>) => {
					state.all = action.payload
				}
			)
			
 	}
 })

 export const ProductsReducer = Products.reducer
 export const {filterProducts, filter2Products} = Products.actions

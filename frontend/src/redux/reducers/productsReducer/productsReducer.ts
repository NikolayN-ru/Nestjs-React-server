import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import { getProducts, ProductItem } from "../../thunks/products";


 interface ProductsState {
 	all: Array<ProductItem>
 }

 const initialState: ProductsState = {
 	all: []
 }


 const Products = createSlice({
 	name: 'products',
 	initialState,
 	reducers: { },
 	extraReducers: (builder) => {
 		builder
 			// .addMatcher(
 			// 	isAnyOf(getArticles.fulfilled),
 			// 	(state, action: PayloadAction<Array<PostItem>>) => {
 			// 		state.all = action.payload
 			// 	}
 			// )
			 .addMatcher(
				isAnyOf(getProducts.fulfilled),
				(state, action: PayloadAction<Array<ProductItem>>) => {
					state.all = action.payload
				}
			)
			
 	}
 })

 export const ProductsReducer = Products.reducer
 export const {} = Products.actions

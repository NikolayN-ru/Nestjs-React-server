import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import { getProductItem, ProductItem } from "../../thunks/productItem";


 interface ProductItemState {
 	item: any
 }

 const initialState: ProductItemState = {
 	item: []
 }

 const ProductItemMain = createSlice({
 	name: 'productItem',
 	initialState,
 	reducers: { },
 	extraReducers: (builder) => {
 		builder
			 .addMatcher(
				isAnyOf(getProductItem.fulfilled),
				(state, action: PayloadAction<Array<ProductItem>>) => {
					state.item = action.payload
				}
			)
 	}
 })

 export const ProductItemReducer = ProductItemMain.reducer
 export const {} = ProductItemMain.actions

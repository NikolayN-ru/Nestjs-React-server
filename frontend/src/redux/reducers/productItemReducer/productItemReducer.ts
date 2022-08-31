import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { getProductItem } from "../../thunks/productItem";


interface ProductItemState {
	item: any;
}

const initialState: ProductItemState = {
	item: {}
}

const ProductItemMain = createSlice({
	name: 'productItem',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				isAnyOf(getProductItem.fulfilled),
				(state, action: PayloadAction<any>) => {
					// console.log(state.item, 'stateProduct')
					state.item = action.payload
				}
			)
	}
})

export const ProductItemReducer = ProductItemMain.reducer
export const { } = ProductItemMain.actions

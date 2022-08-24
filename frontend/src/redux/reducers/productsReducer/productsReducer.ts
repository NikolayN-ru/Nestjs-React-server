import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
 import {getArticles, PostItem} from "../../thunks/articles";


 interface ProductsState {
 	all: Array<PostItem>
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
 			.addMatcher(
 				isAnyOf(getArticles.fulfilled),
 				(state, action: PayloadAction<Array<PostItem>>) => {
 					state.all = action.payload
 				}
 			)
 	}
 })

 export const ProductsReducer = Products.reducer
 export const {} = Products.actions

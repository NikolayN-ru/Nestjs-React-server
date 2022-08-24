import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
//  import {getArticles, PostItem} from "../../thunks/articles";
import { getLogin, ILogin } from "../../thunks/login";
import { logoutUser } from "../../thunks/logout";


 interface ProductsState {
 	all: any
 }

 const initialState: ProductsState = {
 	all: []
 }


 const User = createSlice({
 	name: 'user',
 	initialState,
 	reducers: { },
 	extraReducers: (builder) => {
 		builder
 			.addMatcher(
 				isAnyOf(getLogin.fulfilled),
 				(state, action: PayloadAction<Array<ILogin>>) => {
 					state.all = action.payload
 				}
 			)
			 .addMatcher(
				isAnyOf(logoutUser.fulfilled),
				(state, action: PayloadAction<Array<ILogin>>) => {
					state.all = action.payload
				}
			)
 	}
 })

 export const UserReducer = User.reducer
 export const {} = User.actions

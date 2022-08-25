import { ProductItemReducer } from './reducers/productItemReducer/productItemReducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductsReducer } from "./reducers/productsReducer/productsReducer";
import { TagsReducer } from "./reducers/tagReducer/tagReducer";
import { UserReducer } from "./reducers/userReducer/userReducer";

// мерджим редюсеры в один
const rootReducer = combineReducers({
    products: ProductsReducer,
    productItem: ProductItemReducer,
    user: UserReducer,
    tags: TagsReducer
})

// создаем стор - передаем туда объект - редюсер
export const store = configureStore({
    reducer: rootReducer
})

// типы для useDispatch и useSelector
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// типизируем useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// типизируем useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// useAppSelector(state => state.products) обращение к стору

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../..";

const initialState: any = {
    filter: []
}

// const {all} = useAppSelector(state => state.products);

const FilerProduct = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterProduct(state, { payload }: PayloadAction<any>) {
            // todo filter price
            console.log(payload, state.filter);
            state.all.filter.forEach((item: any) => {});
        },
    },
})

export const FilerProductReduser = FilerProduct.reducer;
export const { filterProduct } = FilerProduct.actions;

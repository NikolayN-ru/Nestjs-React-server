import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { getTags, newTag, TagItem } from "../../thunks/tags";


interface TagState {
    tags: Array<TagItem>
}

const initialState: TagState = {
    tags: []
}

const Tags = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(getTags.fulfilled),
                (state, action: PayloadAction<Array<TagItem>>) => {
                    state.tags = action.payload
                }
            )
            .addMatcher(
                isAnyOf(newTag.fulfilled),
                (state, action: PayloadAction<Array<TagItem>>) => {
                    // state.tags = action.payload
                }
            )
    }
})

export const TagsReducer = Tags.reducer
export const { } = Tags.actions

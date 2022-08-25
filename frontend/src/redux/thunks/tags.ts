import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export interface TagItem {
    title: string;
}

export const getTags = createAsyncThunk<Array<TagItem>, void, { rejectValue: { message: string } }>(
    'get/tags',
    async (_, thunkApi) => {
        const posts = await api.get<Array<TagItem>>('/yarn/tags', {
            data: {},
            headers: {}
        })

        if (posts.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось подключиться к серверу'
            })
        }

        return posts.data;
    }
)

export const newTag = createAsyncThunk<Array<TagItem>, string, { rejectValue: { message: string } }>(
    'post/newtag',
    async (_, thunkApi) => {
        const tag = await api.post<Array<TagItem>>('/yarn/tag', {
            "title": _
        })

        if (tag.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось подключиться к серверу'
            })
        }

        return tag.data;
    }
)


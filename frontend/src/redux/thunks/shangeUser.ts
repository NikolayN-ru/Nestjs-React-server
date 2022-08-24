import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export interface ILogin {
    id: number,
    username: string,
    email: string;
    bio: string;
    image: string;
    token: string;
}

//Generic CreateAsyncThunk
//1 параметр - возвращаемое значение в случае fulfilled
//2 параметр - аргументы payloadCreator, которые падают в _ (первый аргумент payloadCreator)
//3 параметр - типизация thunkApi
export const changeUser = createAsyncThunk<any, any, any>(
    'change/user', // <- что суда пишем ?
    // payloadCreator
    async (query, thunkApi) => {
        // console.log(query.email, query.password, 'queryquery')
        // const posts = await api.get<Array<PostItem>>('/posts', {
        console.log('query-bio!!!', query.value);

        const change = await api.put<any>('/users/user',

                {
                    "user": {
                        [query.key]: query.value,
                    },
                    // "headers": {
                    //     "Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJQZXR5YTIiLCJlbWFpbCI6Im5hcGFkYXlsbzJAZ21haWwuY29tIiwiaWF0IjoxNjYxMzM2OTI3fQ.aThUXR0_aVoeAVQbnCEfN6T5s5eoDrEIBIfNxcidqzg"
                    // }
                },

        )

        if (change.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось поменять данные'
            })
        }
        // console.log(login.data, 'login-data')
        return change.data;
    }
)

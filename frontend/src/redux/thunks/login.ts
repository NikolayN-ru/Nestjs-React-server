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
export const getLogin = createAsyncThunk<any, any, any>(
    'get/login',
    // payloadCreator
    async (query, thunkApi) => {
        // console.log(query.email, query.password, 'queryquery')
        // const posts = await api.get<Array<PostItem>>('/posts', {
        const login = await api.post<any>('/users/login',
            {
                "user": {
                    "email": "napadaylo2@gmail.com",
                    "password": "simple commentwww 2"
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            },
        )

        if (login.status >= 400) {
            return thunkApi.rejectWithValue({
                message: 'Не удалось получить пользователя'
            })
        }
        // console.log(login.data, 'login-data')
        return login.data;
    }
)

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
export const logoutUser = createAsyncThunk<any, any, any>(
    'get/login',
    // payloadCreator
    async (_, thunkApi) => {
        return [];
    }
)

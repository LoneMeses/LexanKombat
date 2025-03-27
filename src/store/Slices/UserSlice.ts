import {IUser} from "../../types/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: IUser = {
    id: Date.now(),
    name: '',
    chatId: null,
    img: '',
    isAdmin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: IUser, action: PayloadAction<IUser>)=> {
            state.name = action.payload.name;
            state.img = action.payload.img;
            state.id = action.payload.id;
            state.chatId = action.payload.chatId;
            state.isAdmin = action.payload.isAdmin;
        }
    }
})
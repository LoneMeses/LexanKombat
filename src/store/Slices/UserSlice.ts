import {IUser} from "../../types/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: IUser = {
    userId: Date.now(),
    firstName: '',
    photoUrl: '',
    isAdmin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: IUser, action: PayloadAction<IUser>)=> {
            state.firstName = action.payload.firstName;
            state.photoUrl = action.payload.photoUrl;
            state.userId = action.payload.userId;
            state.isAdmin = action.payload.isAdmin;
        }
    }
})
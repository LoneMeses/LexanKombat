import {IPrice} from "../../types/IPrice.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IPrice = {
    price: parseInt(localStorage.getItem('price') as string) || 5,
}

const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        priceIncrement: (state: IPrice) => {
            state.price += 10
        }
    }
})

export default priceSlice.reducer;
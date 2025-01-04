import {IPrice} from "../../types/IPrice.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IPrice = {
    VodkaPrice: parseInt(localStorage.getItem('vodkaPrice') as string) || 5,
    RuslanPrice: parseInt(localStorage.getItem('ruslanPrice') as string) || 5,
}

export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        vodkaPriceIncrement: (state: IPrice) => {
            state.VodkaPrice += 10
        },
        ruslanPriceIncrement: (state: IPrice) => {
            state.RuslanPrice += 10
        }
    }
})

export default priceSlice.reducer;
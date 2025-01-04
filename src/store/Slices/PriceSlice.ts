import {IPrice} from "../../types/IPrice.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IPrice = {
    VodkaPrice: parseInt(localStorage.getItem('vodkaPrice') as string) || 5,
    RusikPrice: parseInt(localStorage.getItem('rusikPrice') as string) || 5,
}

export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        vodkaPriceIncrement: (state: IPrice) => {
            state.VodkaPrice += 10
        },
        rusikPriceIncrement: (state: IPrice) => {
            state.RusikPrice += 10
        }
    }
})

export default priceSlice.reducer;
import {IPrice} from "../../types/IPrice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IPrice = {
    VodkaPrice: parseInt(localStorage.getItem('vodkaPrice') as string) || 100,
    RuslanPrice: parseInt(localStorage.getItem('ruslanPrice') as string) || 100,
    VadimPrice: parseInt(localStorage.getItem('vadimPrice') as string) || 100,
}

export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setPrices: (state: IPrice, action: PayloadAction<IPrice>) => {
            state.VodkaPrice = action.payload.VodkaPrice
            state.RuslanPrice = action.payload.RuslanPrice
            state.VadimPrice = action.payload.VadimPrice
        },
        vodkaPriceIncrement: (state: IPrice) => {
            state.VodkaPrice += 100
        },
        ruslanPriceIncrement: (state: IPrice) => {
            state.RuslanPrice += 100
        },
        vadimPriceIncrement: (state: IPrice) => {
            state.VadimPrice += 100
        }

    }
})

export default priceSlice.reducer;
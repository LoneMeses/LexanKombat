import {combineReducers, configureStore} from "@reduxjs/toolkit";
import energyReducer from './Slices/EnergySlice.ts'
import scoreReducer from './Slices/ScoreSlice.ts'
import priceReducer from './Slices/PriceSlice.ts'

const rootReducer = combineReducers({
    energyReducer,
    scoreReducer,
    priceReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
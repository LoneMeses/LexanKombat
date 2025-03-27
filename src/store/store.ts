import {combineReducers, configureStore} from "@reduxjs/toolkit";
import energyReducer from './Slices/EnergySlice.ts'
import scoreReducer from './Slices/ScoreSlice.ts'
import priceReducer from './Slices/PriceSlice.ts'
// import {userApi} from "../services/userService.ts";

const rootReducer = combineReducers({
    energyReducer,
    scoreReducer,
    priceReducer,
    // [userApi.reducerPath]: userApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
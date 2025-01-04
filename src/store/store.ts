import {combineReducers, configureStore} from "@reduxjs/toolkit";
import energyReducer from './Slices/EnergySlice.ts'
import scoreReducer from './Slices/ScoreSlice.ts'

const rootReducer = combineReducers({
    energyReducer,
    scoreReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
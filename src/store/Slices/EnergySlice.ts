import {createSlice} from "@reduxjs/toolkit";
import {IEnergy} from "../../types/IEnergy.ts";


const initialState: IEnergy = {
    energy: parseInt(localStorage.getItem("energy") as string) || 3000,
}

export const energySlice = createSlice({
    name: 'energy',
    initialState,
    reducers: {
        energyDecrement (state: IEnergy) {
            state.energy -= 1
        },
        energyIncrement (state: IEnergy) {
            state.energy += 1
        }
    }
})
export default energySlice.reducer

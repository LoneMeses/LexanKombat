import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEnergy} from "../../types/IEnergy";


const initialState: IEnergy = {
    energy: parseInt(localStorage.getItem("energy") as string) || 3000,
    energyTapNumberIncrease: parseInt(localStorage.getItem("energyTapNumberIncrease") as string) || 1,
    energyTapNumberDecrease: parseInt(localStorage.getItem("energyTapNumberDecrease") as string) || 1,
    totalEnergy: parseInt(localStorage.getItem("totalEnergy") as string) || 3000,
}

export const energySlice = createSlice({
    name: 'energy',
    initialState,
    reducers: {
        energyDecrement (state: IEnergy) {
            state.energy -= state.energyTapNumberDecrease;
        },
        energyIncrement (state: IEnergy) {
            state.energy += state.energyTapNumberIncrease;
        },
        AddEnergyIncrese (state: IEnergy, action: PayloadAction<number>) {
            state.energyTapNumberIncrease += action.payload
        },
        EnergyLossOnTap (state: IEnergy, action: PayloadAction<number>) {
            state.energyTapNumberDecrease += action.payload
        },
        totalEnergyAdd (state: IEnergy, action: PayloadAction<number>) {
            state.totalEnergy += action.payload
        },
        energyOpenAddPlus (state: IEnergy, action: PayloadAction<number>) {
            if(state.energy + action.payload >= state.totalEnergy) {
                state.energy = state.totalEnergy
            } else {
                state.energy += action.payload
            }
        }
    }
})
export default energySlice.reducer

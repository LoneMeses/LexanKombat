import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEnergy} from "../../types/IEnergy";


const initialState: IEnergy = {
    energy: parseInt(localStorage.getItem("energy") as string) || 3000,
    energyAddOnSeconds: parseInt(localStorage.getItem("energyTapNumberIncrease") as string) || 1,
    energyLossOnTap: parseInt(localStorage.getItem("energyTapNumberDecrease") as string) || 1,
    totalEnergy: parseInt(localStorage.getItem("totalEnergy") as string) || 3000,
}

export const energySlice = createSlice({
    name: 'energy',
    initialState,
    reducers: {
        setEnergy (state: IEnergy, action: PayloadAction<IEnergy>) {
          state.energy = action.payload.energy
          state.energyAddOnSeconds = action.payload.energyAddOnSeconds
          state.energyLossOnTap = action.payload.energyLossOnTap
          state.totalEnergy = action.payload.totalEnergy
        },
        energyDecrement (state: IEnergy) {
            state.energy -= state.energyLossOnTap;
        },
        energyIncrement (state: IEnergy) {
            state.energy += state.energyAddOnSeconds;
        },
        EnergyAddOnSeconds (state: IEnergy, action: PayloadAction<number>) {
            state.energyAddOnSeconds += action.payload
        },
        EnergyLossOnTap (state: IEnergy, action: PayloadAction<number>) {
            state.energyLossOnTap += action.payload
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

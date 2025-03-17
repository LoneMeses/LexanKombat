import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {scoreSlice} from "../store/Slices/ScoreSlice.ts";
import {energySlice} from "../store/Slices/EnergySlice.ts";

import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";


export const useUpgrades = () => {
    const {score} = useTypedSelector(state => state.scoreReducer)
    const {scoreMinus, scoreTapNumberIncrease} = scoreSlice.actions
    const {EnergyLossOnTap, totalEnergyAdd, AddEnergyIncrese} = energySlice.actions
    const dispatch: AppDispatch = useDispatch()

    const buyUpgrade = (price: number, type: string, incrementFunc: void ) => {
        if(score >= price) {
            dispatch(scoreMinus(price))
            dispatch(() => incrementFunc)
            switch (type) {
                case 'scoreIncrease':
                    dispatch(EnergyLossOnTap(1))
                    dispatch(scoreTapNumberIncrease())
                    break
                case 'energyAdd':
                    dispatch(totalEnergyAdd(100))
                    break
                case 'energyIncrease':
                    dispatch(AddEnergyIncrese(1))
                    break
            }
        }
    }



    return {buyUpgrade}
}

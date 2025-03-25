import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {scoreSlice} from "../store/Slices/ScoreSlice.ts";
import {energySlice} from "../store/Slices/EnergySlice.ts";

import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";
import {priceSlice} from "../store/Slices/PriceSlice.ts";


export const useUpgrades = () => {
    const {score} = useTypedSelector(state => state.scoreReducer)
    const {scoreMinus, scoreTapNumberIncrease} = scoreSlice.actions
    const {vodkaPriceIncrement,ruslanPriceIncrement,vadimPriceIncrement} = priceSlice.actions
    const {EnergyLossOnTap, totalEnergyAdd, EnergyAddOnSeconds} = energySlice.actions
    const dispatch: AppDispatch = useDispatch()

    const buyUpgrade = (price: number, type: string ) => {
        if(score >= price) {
            dispatch(scoreMinus(price))
            switch (type) {
                case 'scoreIncrease':
                    dispatch(vodkaPriceIncrement())
                    dispatch(EnergyLossOnTap(1))
                    dispatch(scoreTapNumberIncrease())
                    break
                case 'energyAdd':
                    dispatch(ruslanPriceIncrement())
                    dispatch(totalEnergyAdd(100))
                    break
                case 'energyIncrease':
                    dispatch(vadimPriceIncrement())
                    dispatch(EnergyAddOnSeconds(1))
                    break
            }
        }
    }



    return {buyUpgrade}
}

import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {scoreSlice} from "../store/Slices/ScoreSlice.ts";
import {energySlice} from "../store/Slices/EnergySlice.ts";
import {priceSlice} from "../store/Slices/PriceSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";


export const useUpgrades = () => {
    const {RuslanPrice, VodkaPrice, VadimPrice} = useTypedSelector(state => state.priceReducer)
    const {score} = useTypedSelector(state => state.scoreReducer)
    const {scoreMinus, scoreTapNumberIncrease} = scoreSlice.actions
    const {EnergyLossOnTap, totalEnergyAdd, AddEnergyIncrese} = energySlice.actions
    const {vodkaPriceIncrement, ruslanPriceIncrement, vadimPriceIncrement} = priceSlice.actions
    const dispatch: AppDispatch = useDispatch()
    const BuyUpgradeVodka = () => {
        if (score >= VodkaPrice) {
            dispatch(scoreMinus(VodkaPrice))
            dispatch(vodkaPriceIncrement())
            dispatch(EnergyLossOnTap(1))
            dispatch(scoreTapNumberIncrease())
        }

    }
    const BuyUpgradeRuslan = () => {
        if (score >= RuslanPrice) {
            dispatch(scoreMinus(RuslanPrice))
            dispatch(ruslanPriceIncrement())
            dispatch(totalEnergyAdd(100))
        }
    }
    const BuyUpgradeVadim = () => {
        if (score >= VadimPrice) {
            dispatch(scoreMinus(VadimPrice))
            dispatch(vadimPriceIncrement())
            dispatch(AddEnergyIncrese(1))
        }
    }

    return {
        BuyUpgradeRuslan,
        BuyUpgradeVodka,
        BuyUpgradeVadim
    }
}

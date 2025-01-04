import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {scoreSlice} from "../store/Slices/ScoreSlice.ts";
import {energySlice} from "../store/Slices/EnergySlice.ts";
import {priceSlice} from "../store/Slices/PriceSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";


export const useUpgrades = () => {
    const {RuslanPrice, VodkaPrice} = useTypedSelector(state => state.priceReducer)
    const {score, scoreTapNumber} = useTypedSelector(state => state.scoreReducer)
    const {energyTapNumberDecrease, totalEnergy} = useTypedSelector(state => state.energyReducer)
    const {scoreMinus, scoreTapNumberIncrease} = scoreSlice.actions
    const {EnergyLossOnTap, totalEnergyAdd} = energySlice.actions
    const {vodkaPriceIncrement, ruslanPriceIncrement} = priceSlice.actions
    const dispatch: AppDispatch = useDispatch()
    const BuyUpgradeVodka = () => {
        if (score >= VodkaPrice) {
            dispatch(scoreMinus(VodkaPrice))
            dispatch(vodkaPriceIncrement())
            dispatch(EnergyLossOnTap(1))
            dispatch(scoreTapNumberIncrease())
            localStorage.setItem('score', score.toString())
            localStorage.setItem('scoreTapNumber', scoreTapNumber.toString())
            localStorage.setItem('vodkaPrice', VodkaPrice.toString())
            localStorage.setItem('energyTapNumberDecrease', energyTapNumberDecrease.toString())
        }

    }
    const BuyUpgradeRuslan = () => {
        if (score >= RuslanPrice) {
            dispatch(scoreMinus(RuslanPrice))
            dispatch(ruslanPriceIncrement())
            dispatch(totalEnergyAdd(100))
            localStorage.setItem('score', score.toString())
            localStorage.setItem('ruslanPrice', RuslanPrice.toString())
            localStorage.setItem('totalEnergy', totalEnergy.toString())
        }
    }

    return {
        BuyUpgradeRuslan,
        BuyUpgradeVodka,
    }
}

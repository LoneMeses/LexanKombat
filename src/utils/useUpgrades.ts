import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {scoreSlice} from "../store/Slices/ScoreSlice.ts";
import {energySlice} from "../store/Slices/EnergySlice.ts";
import {priceSlice} from "../store/Slices/PriceSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";


export const useUpgrades = () => {
    const {RusikPrice, VodkaPrice} = useTypedSelector(state => state.priceReducer)
    const {score, scoreTapNumber} = useTypedSelector(state => state.scoreReducer)
    const {energyTapNumberDecrease, totalEnergy} = useTypedSelector(state => state.energyReducer)
    const {scoreMinus, scoreTapNumberIncrease} = scoreSlice.actions
    const {EnergyLossOnTap, totalEnergyAdd} = energySlice.actions
    const {vodkaPriceIncrement, rusikPriceIncrement} = priceSlice.actions
    const dispatch: AppDispatch = useDispatch()
    const BuyUpgradeVodka = () => {
        dispatch(scoreMinus(VodkaPrice))
        dispatch(vodkaPriceIncrement())
        dispatch(EnergyLossOnTap(1))
        dispatch(scoreTapNumberIncrease())
        localStorage.setItem('score', score.toString())
        localStorage.setItem('scoreTapNumber', scoreTapNumber.toString())
        localStorage.setItem('vodkaPrice', VodkaPrice.toString())
        localStorage.setItem('energyTapNumberDecrease', energyTapNumberDecrease.toString())
    }
    const BuyUpgradeRusik = () => {
        dispatch(scoreMinus(RusikPrice))
        dispatch(rusikPriceIncrement())
        dispatch(totalEnergyAdd(100))
        localStorage.setItem('score', score.toString())
        localStorage.setItem('rusikPrice', RusikPrice.toString())
        localStorage.setItem('totalEnergy', totalEnergy.toString())
    }

    return {
        BuyUpgradeRusik,
        BuyUpgradeVodka,
    }
}

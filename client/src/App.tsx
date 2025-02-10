import {useTelegram} from "../src/hooks/useTelegram.ts";
import {useEffect} from "react";
import Header from "../../src/components/Header/Header.tsx";
import Game from "../../src/components/Game/Game.tsx";
import Footer from "../../src/components/Footer/Footer.tsx";
import {Route, Routes} from "react-router";
import Form from "../../src/components/Form/Form.tsx";
import './App.css'
import UpgradePage from "../../src/components/Upgrades/UpgradePage.tsx";
import {useAppDispatch, useTypedSelector} from "../src/hooks/useTypedSelector.ts";
import {AppDispatch} from "../../src/store/store.ts";
import {energySlice} from "../../src/store/Slices/EnergySlice.ts";

function KombatApp() {
    const {tg} = useTelegram()
    const {energyTapNumberIncrease} = useTypedSelector(state => state.energyReducer)
    const {energyOpenAddPlus} = energySlice.actions
    const dispatch: AppDispatch = useAppDispatch()

    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(localStorage.getItem('closeTime') as string) || Date.now();
        const openTime = Date.now()
        const energyForAdd = Math.ceil(((openTime - closeTime) * energyTapNumberIncrease / 1000))
        setTimeout(() => {
            dispatch(energyOpenAddPlus(energyForAdd))
        }, 1000)

        //eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<Game/>}/>
                <Route path={'/form'} element={<Form/>}/>
                <Route path={'/upgrade'} element={<UpgradePage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default KombatApp;
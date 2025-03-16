import {useTelegram} from "./hooks/useTelegram.ts";
import {useEffect} from "react";
import Header from "./components/Header/Header.tsx";
import Game from "./components/Game/Game.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router";
import Form from "./components/Form/Form.tsx";
import './App.css'
import UpgradePage from "./components/Upgrades/UpgradePage.tsx";
import {useAppDispatch, useTypedSelector} from "./hooks/useTypedSelector.ts";
import {AppDispatch} from "./store/store.ts";
import {energySlice} from "./store/Slices/EnergySlice.ts";
import {userSlice} from "./store/Slices/UserSlice.ts";

function KombatApp() {
    const {tg, user} = useTelegram()
    const {energyTapNumberIncrease} = useTypedSelector(state => state.energyReducer)
    const {energyOpenAddPlus} = energySlice.actions
    const {setUser} = userSlice.actions
    const dispatch: AppDispatch = useAppDispatch()

    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(localStorage.getItem('closeTime') as string) || Date.now();
        const openTime = Date.now()
        const energyForAdd = Math.ceil(((openTime - closeTime) * energyTapNumberIncrease / 1000))
        if(user) {
            dispatch(setUser({name: user.first_name, id: user.id, img: user.photo_url, isAdmin: user.id === 2131234}))
        }
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
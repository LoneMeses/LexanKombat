import {useTelegram} from "./hooks/useTelegram.ts";
import {useEffect} from "react";
import Header from "./components/Header/Header.tsx";
import Game from "./components/Game/Game.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router";
import Form from "./components/Form/Form.tsx";
import './App.css'
import UpgradePage from "./components/Upgrades/UpgradePage.tsx";

function KombatApp() {
    const {tg} = useTelegram()


    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(localStorage.getItem('closeTime') as string) || Date.now();
        const openTime = Date.now()
        const lastCurrentEnergy = parseInt(localStorage.getItem('energy') as string)
        const energyForAdd = ((openTime - closeTime) / 3000)
        if (energyForAdd + lastCurrentEnergy >= 3000) {
            localStorage.setItem('energy', '3000')
        } else {
            localStorage.setItem('energy', (energyForAdd + lastCurrentEnergy).toString())
        }
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
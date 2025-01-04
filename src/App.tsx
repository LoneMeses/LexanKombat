import {useTelegram} from "./hooks/useTelegram.ts";
import {useEffect} from "react";
import Header from "./components/Header/Header.tsx";
import Game from "./components/Game/Game.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router";
import Form from "./components/Form/Form.tsx";
import './App.css'

function KombatApp() {
    const {tg} = useTelegram()


    useEffect(() => {
        tg.ready()
        tg.expand()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        tg.requestFullscreen()
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
            </Routes>
            <Footer/>
        </div>
    );
}

export default KombatApp;
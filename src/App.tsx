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
import {createUser} from "./services/axiosService.ts";
// import {userApi} from "./services/userService.ts";
// import {userSlice} from "./store/Slices/UserSlice.ts";

function KombatApp() {
    const {tg, user} = useTelegram()
    const {energyAddOnSeconds} = useTypedSelector(state => state.energyReducer)
    const {energyOpenAddPlus} = energySlice.actions
    // const {setUser} = userSlice.actions
    const dispatch: AppDispatch = useAppDispatch()
    // const [createUser] = userApi.useCreateUserMutation()

   /* const handleCreate = async () => {
        try {
            if(user) {
                await createUser({id: user.id, name: user.first_name, img: user.photo_url, isAdmin: false})
            }
        } catch (e: unknown) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (e.status === 404 && user) {
                const {data} = userApi.useFetchUserFromDBQuery(user.id)
                console.log(data)
            }
        }
    }*/

    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(localStorage.getItem('closeTime') as string) || Date.now();
        const openTime = Date.now()
        const energyForAdd = Math.ceil(((openTime - closeTime) * energyAddOnSeconds / 1000))
        // handleCreate().then(response => console.log(response))

        setTimeout(() => {
            const userForSend = {
                userId: user!.id,
                firstName: user!.first_name,
                photoUrl: user!.photo_url,
                isAdmin: false,
            }
            const response = createUser(userForSend)
            console.log(response)
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
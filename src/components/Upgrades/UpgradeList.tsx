import Vodka from '../../assets/Vodka.png'
import Ruslan from '../../assets/Rusik.png'
import Vadim from '../../assets/Vadim.png'
import './UpgradePage.css'
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useUpgrades} from "../../utils/useUpgrades.ts";
import {useEffect} from "react";

const UpgradeList = () => {
    const {RuslanPrice, VodkaPrice, VadimPrice} = useTypedSelector(state => state.priceReducer)
    const {score, scoreTapNumber} = useTypedSelector(state => state.scoreReducer)
    const {energyTapNumberDecrease, totalEnergy, energyTapNumberIncrease} = useTypedSelector(state => state.energyReducer)
    const {BuyUpgradeVodka, BuyUpgradeRuslan, BuyUpgradeVadim} = useUpgrades()
    useEffect(() => {
        localStorage.setItem('score', score.toString())
        localStorage.setItem('scoreTapNumber', scoreTapNumber.toString())
        localStorage.setItem('vodkaPrice', VodkaPrice.toString())
        localStorage.setItem('energyTapNumberDecrease', energyTapNumberDecrease.toString())
        localStorage.setItem('ruslanPrice', RuslanPrice.toString())
        localStorage.setItem('totalEnergy', totalEnergy.toString())
        localStorage.setItem('vadimPrice', VadimPrice.toString())
        localStorage.setItem('energyTapNumberIncrease', energyTapNumberIncrease.toString())
    }, [score, scoreTapNumber, VodkaPrice, energyTapNumberDecrease, totalEnergy, VadimPrice, energyTapNumberIncrease, RuslanPrice]);
    return (
        <div className='upgrade-list'>
            <div className='upgrade-item'>
                <img src={Vodka} alt="upgrade_item_src"/>
                <h4>Хлебнуть Volodink'и</h4>
                <p>+1 коин за клик!</p>
                <button onClick={BuyUpgradeVodka}>{VodkaPrice}</button>
            </div>
            <div className='upgrade-item'>
                <img src={Ruslan} alt="upgrade_item_src"/>
                <h4>Дать покурить Русику</h4>
                <p>+100 к энергии!</p>
                <button onClick={BuyUpgradeRuslan}>{RuslanPrice}</button>
            </div>
            <div className='upgrade-list'>
                <div className='upgrade-item'>
                    <img src={Vadim} alt="upgrade_item_src"/>
                    <h4>Встретиться с Вадясом</h4>
                    <p>+1 к восстановлению энергии</p>
                    <button onClick={BuyUpgradeVadim}>{VadimPrice}</button>
                </div>
            </div>
        </div>
    );}

export default UpgradeList;
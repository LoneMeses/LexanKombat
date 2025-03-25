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
    const {
        energyLossOnTap,
        totalEnergy,
        energyAddOnSeconds
    } = useTypedSelector(state => state.energyReducer)
    const {buyUpgrade} = useUpgrades()
    useEffect(() => {
        localStorage.setItem('score', score.toString())
        localStorage.setItem('scoreTapNumber', scoreTapNumber.toString())
        localStorage.setItem('vodkaPrice', VodkaPrice.toString())
        localStorage.setItem('energyTapNumberDecrease', energyLossOnTap.toString())
        localStorage.setItem('ruslanPrice', RuslanPrice.toString())
        localStorage.setItem('totalEnergy', totalEnergy.toString())
        localStorage.setItem('vadimPrice', VadimPrice.toString())
        localStorage.setItem('energyTapNumberIncrease', energyAddOnSeconds.toString())
    }, [score, scoreTapNumber, VodkaPrice, energyLossOnTap, totalEnergy, VadimPrice, energyAddOnSeconds, RuslanPrice]);
    return (
        <div className='upgrade-list'>
            <div className='upgrade-item'>
                <img src={Vodka} alt="upgrade_item_src"/>
                <h4>Хлебнуть Volodink'и</h4>
                <p>+1 коин за клик!</p>
                <button onClick={ () => buyUpgrade(VodkaPrice, 'scoreIncrease')}>{VodkaPrice}</button>
            </div>
            <div className='upgrade-item'>
                <img src={Ruslan} alt="upgrade_item_src"/>
                <h4>Дать покурить Русику</h4>
                <p>+100 к энергии!</p>
                <button onClick={() => buyUpgrade(RuslanPrice, 'energyAdd')}>{RuslanPrice}</button>
            </div>
            <div className='upgrade-item'>
                <img src={Vadim} alt="upgrade_item_src"/>
                <h4>Встретиться с Вадясом</h4>
                <p>+1 к восстановлению энергии</p>
                <button onClick={() => buyUpgrade(VadimPrice, 'energyIncrease')}>{VadimPrice}</button>
            </div>
        </div>

    );
}

export default UpgradeList;
import Vodka from '../../assets/Vodka.png'
import Ruslan from '../../assets/Rusik.png'
import './UpgradePage.css'
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useUpgrades} from "../../utils/useUpgrades.ts";

const UpgradeList = () => {
    const {RuslanPrice, VodkaPrice} = useTypedSelector(state => state.priceReducer)
    const {BuyUpgradeVodka, BuyUpgradeRuslan} = useUpgrades()
    return (
        <div className='upgrade-list'>
            <div className='upgrade-item'>
                <img src={Vodka} alt="upgrade_item_src"/>
                <h4>Выпить Volodink'и</h4>
                <p>+1 коин за клик!</p>
                <button onClick={BuyUpgradeVodka}>{VodkaPrice}</button>
            </div>
            <div className='upgrade-item'>
                <img src={Ruslan} alt="upgrade_item_src"/>
                <h4>Дать покурить Русику</h4>
                <p>+100 к энергии</p>
                <button onClick={BuyUpgradeRuslan}>{RuslanPrice}</button>
            </div>
        </div>
    );
};

export default UpgradeList;
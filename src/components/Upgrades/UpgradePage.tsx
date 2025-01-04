import {FC} from 'react';
import Coin from "../../assets/lCoin.png";
import '../Game/Game.css'
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import UpgradeList from "./UpgradeList.tsx";
import './UpgradePage.css'

const UpgradePage: FC = () => {
    const {score} = useTypedSelector(state => state.scoreReducer)
    return (
        <div className={'game'}>
            <div className="counter">
                <img src={Coin} alt="l-coin"/>
                <span>{score}</span>
            </div>
            <UpgradeList/>
        </div>
    );
};

export default UpgradePage;
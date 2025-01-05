import React, {FC, useEffect} from 'react';
import './Game.css'
import Coin from '../../assets/lCoin.png'
import Lexan from '../../assets/LexanButton.png'
import {createFloatingScore} from "../../utils/createFloatingScore.ts";
import {useAppDispatch, useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {AppDispatch} from "../../store/store.ts";
import {energySlice} from "../../store/Slices/EnergySlice.ts";
import {scoreSlice} from "../../store/Slices/ScoreSlice.ts";

const Game: FC = () => {
    const {energy, totalEnergy} = useTypedSelector(state => state.energyReducer)
    const {score, scoreTapNumber} = useTypedSelector(state => state.scoreReducer)
    const {energyDecrement, energyIncrement} = energySlice.actions
    const {scoreIncrement} = scoreSlice.actions
    const dispatch: AppDispatch = useAppDispatch()
    const widthForBar = energy * 100 / totalEnergy


    useEffect(() => {
        const interval = setInterval(() => {
                if (energy < totalEnergy) {
                    dispatch(energyIncrement())
                } else {
                    clearInterval(interval)
                    return energy
                }
            localStorage.setItem('energy', energy.toString())
        }, 3000)
        return () => clearInterval(interval)
        //eslint-disable-next-line
    }, [energy])

    const onClickHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (energy > 0 && energy >= scoreTapNumber) {
            const target = event.target as HTMLImageElement
            const rect = target.getBoundingClientRect()

            const offsetX = event.clientX - rect.left - rect.width / 2;
            const offsetY = event.clientY - rect.top - rect.height / 2;

            const DEG = 40

            const tiltX = (offsetY / rect.height) * DEG
            const tiltY = (offsetX / rect.width) * -DEG

            target.style.setProperty('--tiltX', `${tiltX}deg`)
            target.style.setProperty('--tiltY', `${tiltY}deg`)
            createFloatingScore(event, scoreTapNumber)

            dispatch(scoreIncrement())
            dispatch(energyDecrement())

            localStorage.setItem('closeTime', Date.now().toString())

            setTimeout(() => {
                localStorage.setItem('score', score.toString())
                localStorage.setItem('energy', energy.toString())
                target.style.setProperty('--tiltX', `0deg`)
                target.style.setProperty('--tiltX', `0deg`)
            }, 300)

        }
    }



    return (
        <div className={'game'}>
            <div className={'counter'}>
                <img src={Coin} alt="l-coin"/>
                <span>{score}</span>
            </div>
            <div className="circle">
                <img src={Lexan} alt="lexan" onClick={event => onClickHandler(event)}/>
            </div>
            <div className='energy-wrapper'>
                <div className='energy-value'>Энергия: {energy} / {totalEnergy}</div>
                <div className='energy-bar' style={{width: `${widthForBar}%`}}>
                </div>
            </div>
        </div>
    );
};

export default Game;
import {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import './UpgradePage.css'
interface UpgradeItemProps {
    name: string,
    img: string,
}

const UpgradeItem: FC<UpgradeItemProps> = ({name, img}) => {
    const {price} = useTypedSelector(state => state.priceReducer)
    return (
        <div className='upgrade-item'>
            <img src={img} alt="upgrade_item_src"/>
            <h4>{name}</h4>
            <button>{price}</button>
        </div>
    );
};

export default UpgradeItem;
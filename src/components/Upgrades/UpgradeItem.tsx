import {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

interface UpgradeItemProps {
    name: string,
    img: string,
}

const UpgradeItem: FC<UpgradeItemProps> = ({name, img}) => {
    const {price} = useTypedSelector(state => state.priceReducer)
    return (
        <div className='upgrade-item'>
            <img src={img} alt="upgrade_item_src"/>
            <h3>{name}</h3>
            <button>{price}</button>
        </div>
    );
};

export default UpgradeItem;
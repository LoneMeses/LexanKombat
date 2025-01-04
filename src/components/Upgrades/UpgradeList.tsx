import {UpgradesConsts} from "../../Constants/UpgradesConsts.ts";
import UpgradeItem from "./UpgradeItem.tsx";
import './UpgradePage.css'

const UpgradeList = () => {
    return (
        <div className='upgrade-list'>
            {UpgradesConsts.map(item =>
                <UpgradeItem key={item.id} name={item.name} img={item.img}/>
            )}
        </div>
    );
};

export default UpgradeList;
import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai";
import { LuGamepad2 } from "react-icons/lu";
import './Footer.css'
import {Link} from "react-router";
import {FC} from "react";

const Footer: FC = () => {

    return (
        <div className={'footer'}>
            <div className={'wrapper'}>
                <Link  to={''} className={'wrapper-button'}>
                    <div>
                        <AiOutlineHome className={'wrapper-icon'}/>
                    </div>
                    <div>
                        Главная
                    </div>
                </Link>
            </div>
            <hr/>
            <div className={'wrapper'}>
                <Link to={'upgrade'} className={'wrapper-button'}>
                    <div>
                        <LuGamepad2 className={'wrapper-icon'}/>
                    </div>
                    <div>
                        Улучшения
                    </div>
                </Link>
            </div>
            <hr/>
            <div className={'wrapper'}>
                <Link to={'form'} className={'wrapper-button'}>
                    <div>
                        <AiOutlineDollar className={'wrapper-icon'}/>
                    </div>
                    <div>
                        Вывод
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
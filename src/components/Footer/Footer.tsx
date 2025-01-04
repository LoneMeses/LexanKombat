import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai";
import './Footer.css'
import {Link} from "react-router";
import {FC} from "react";

const Footer: FC = () => {

    return (
        <div className={'footer'}>
            <div className={'home-div'}>
                <Link  to={''} className={'home-btn active'}>
                    <div>
                        <AiOutlineHome className={'home-icon'}/>
                    </div>
                    <div>
                        Главная
                    </div>
                </Link>
            </div>
            <hr/>
            <div className="loss-div">
                <Link to={'form'} className={'loss-btn'}>
                    <div>
                        <AiOutlineDollar className={'loss-icon'}/>
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
import './SidebarTop.modules.scss';

import { YouTubeLogo } from '../../assets/icons/icons';


const SidebarTop = () => {
    return (
        <div className="SidebarTop">
            <button className="burger-btn">
                <div className="burger-span"></div>
                <div className="burger-span"></div>
                <div className="burger-span"></div>
            </button>
            <YouTubeLogo/>
        </div>
    )
}

export default SidebarTop;
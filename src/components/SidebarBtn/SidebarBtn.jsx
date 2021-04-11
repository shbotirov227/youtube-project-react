import {
    HomeBtn,
    TrendBtn,
    SubsBtn,
    Library,
    History
} from '../../assets/icons/icons';

import './SidebarBtn.modules.scss';

const SidebarBtn = () => {
    return (
        <div className="SidebarBtn">

            <div className="top">
                <button className="sidebar-btn">
                    <HomeBtn/>
                    <span>Home</span>
                </button>

                <button className="sidebar-btn">
                    <TrendBtn/>
                    <span>Trending</span>
                </button>

                <button className="sidebar-btn">
                    <SubsBtn/>
                    <span>Subscriptions</span>
                </button>
            </div>

            <button className="sidebar-btn">
                    <Library/>
                    <span>Library</span>
            </button>

            <button className="sidebar-btn">
                    <History/>
                    <span>History</span>
            </button>
        </div>
    )
}

export default SidebarBtn;
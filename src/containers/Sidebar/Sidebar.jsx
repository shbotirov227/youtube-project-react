import SidebarBtn from '../../components/SidebarBtn/SidebarBtn';
import SidebarTop from '../../components/SidebarTop/SidebarTop';
import './Sidebar.modules.scss';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <SidebarTop/>
            <SidebarBtn/>
        <h1>Sidebar</h1> 
        </div>
    )
}

export default Sidebar;
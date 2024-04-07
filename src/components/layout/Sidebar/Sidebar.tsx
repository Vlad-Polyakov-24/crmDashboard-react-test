import { useSelector } from "react-redux";
import './sidebar.scss';
import logo from '../../../assets/images/logo.svg';
import userLogo from '../../../assets/images/users/user-01.jpg';
import Nav from "../../Nav/Nav.tsx";
import {useEffect} from "react";

const Sidebar = () => {
    // @ts-ignore
    const sidebarVisibility = useSelector(state => state.app.sidebarVisibility);

    useEffect(() => {
        document.body.style.overflow = window.innerWidth < 1024 && sidebarVisibility ? 'hidden' : 'auto';
    }, [sidebarVisibility, window.innerWidth]);

    return (
        <aside className={`sidebar ${sidebarVisibility && 'sidebar--active'}`}>
            <strong className='sidebar__logo'>
                <a href="#" className='sidebar__logo-link'>
                    <picture>
                        <img src={logo} alt="logo"/>
                    </picture>
                </a>
            </strong>
            <Nav/>
            <div className="sidebar__user">
                <div className="sidebar__user-logo">
                    <picture>
                        <img src={userLogo} alt="user"/>
                    </picture>
                </div>
                <p className="sidebar__user-name">Evano</p>
                <small className="sidebar__user-position">Project Manager</small>
            </div>
        </aside>
    );
};

export default Sidebar;

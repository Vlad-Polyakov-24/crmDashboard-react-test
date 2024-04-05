import styles from './sidebar.module.scss';
import logo from '../../../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <strong className={styles.sidebar__logo}>
                <a href="#" className={styles['sidebar__logo-link']}>
                    <picture>
                        <img src={logo} alt="logo"/>
                    </picture>
                </a>
            </strong>
            <nav>
                <ul>
                    <li>
                        {/*<NavLink to='/jokes' activeClassName={styles['active']} className={styles['header__nav-link']}><span>Jokes</span></NavLink>*/}
                        <NavLink to='/dashboard'><span>Dashboard</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/product'><span>Product</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/customers'><span>Customers</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/income'><span>Income</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/promote'><span>Promote</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/help'><span>Help</span></NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

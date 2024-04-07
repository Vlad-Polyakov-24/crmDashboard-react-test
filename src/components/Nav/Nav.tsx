import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appActions } from "../../store/appSlice.ts";
import styles from './nav.module.scss';
import Icon from "../UI/Icon/Icon.tsx";

const Nav = () => {
    const dispatch = useDispatch();
    const onClickHandler = () => dispatch(appActions.toggleSidebarVisibility());

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li>
                    <NavLink
                        to='/dashboard' end
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-01'/>
                        <span className={styles['nav__link-text']}>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard/product'
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-02'/>
                        <span className={styles['nav__link-text']}>Product</span>
                        <Icon size='16' icon='arrow' className='ml-a'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard/customers'
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-03'/>
                        <span className={styles['nav__link-text']}>Customers</span>
                        <Icon size='16' icon='arrow' className='ml-a'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard/income'
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-04'/>
                        <span className={styles['nav__link-text']}>Income</span>
                        <Icon size='16' icon='arrow' className='ml-a'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard/promote'
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-05'/>
                        <span className={styles['nav__link-text']}>Promote</span>
                        <Icon size='16' icon='arrow' className='ml-a'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard/help'
                        className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link)}
                        onClick={onClickHandler}>
                        <Icon size='24' icon='icon-06'/>
                        <span className={styles['nav__link-text']}>Help</span>
                        <Icon size='16' icon='arrow' className='ml-a'/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

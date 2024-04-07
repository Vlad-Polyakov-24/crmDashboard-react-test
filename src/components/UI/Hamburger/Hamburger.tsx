import styles from './hamburger.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../../store/appSlice.ts";

const Hamburger = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const sidebarVisibility = useSelector(state => state.app.sidebarVisibility);

    const sidebarHandler = () => dispatch(appActions.toggleSidebarVisibility());

    return (
        <button
            type='button'
            className={`${styles.hamburger} ${sidebarVisibility && styles['hamburger--active']}`}
            onClick={sidebarHandler}><span></span></button>
    );
};

export default Hamburger;

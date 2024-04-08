import styles from './hamburger.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../../store/appSlice.ts";
import { RootState } from "../../../store";

const Hamburger = () => {
    const dispatch = useDispatch();
    const sidebarVisibility = useSelector((state: RootState) => state.app.sidebarVisibility);
    const sidebarHandler = () => dispatch(appActions.toggleSidebarVisibility());

    return (
        <button
            type='button'
            className={`${styles.hamburger} ${sidebarVisibility ? styles['hamburger--active'] : ''}`}
            onClick={sidebarHandler}><span></span></button>
    );
};

export default Hamburger;

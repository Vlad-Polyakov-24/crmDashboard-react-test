import styles from './someContent.module.scss';

import { useLocation } from "react-router-dom";

const SomeContent = () => {
    const location = useLocation();

    const currentLocation = location.pathname.split('/').pop();

    const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);

    return (
        <section className={styles['some-content']}>
            <h3>{capitalize(currentLocation ? currentLocation : 'some')} content</h3>
        </section>
    );
};

export default SomeContent;

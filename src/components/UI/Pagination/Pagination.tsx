import styles from './pagination.module.scss';

const Pagination = () => {
    return (
        <ul className={styles.pagination}>
            <li className={styles.pagination__item}>
                <a href="#" className={`${styles.pagination__link} ${styles['pagination__link--prev"']}`}>&lt;</a>
            </li>
            <li className={styles.pagination__item}>
                <a href="#" className={`${styles.pagination__link} ${styles['pagination__link--active']}`}>1</a>
            </li>
            <li className={styles.pagination__item}>
                <a href="#" className={styles.pagination__link}>2</a>
            </li>
            <li className={styles.pagination__item}>
                <a href="#" className={styles.pagination__link}>3</a>
            </li>
            <li className={styles.pagination__item}>
                <a href="#" className={styles.pagination__link}>4</a>
            </li>
            <li className="pagination__item pagination__item--rest">...</li>
            <li className={styles.pagination__item}>
                <a href="#" className={styles.pagination__link}>40</a>
            </li>
            <li className={styles.pagination__item}>
                <a href="#" className={`${styles.pagination__link} ${styles['pagination__link--next"']}`}>&gt;</a>
            </li>
        </ul>
    );
};

export default Pagination;

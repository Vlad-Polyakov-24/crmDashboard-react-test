import styles from './notFound.module.scss';

const NotFound = () => {
    return (
        <section className={styles['not-found']}>
            <h3>404: Page not found</h3>
        </section>
    );
};

export default NotFound;

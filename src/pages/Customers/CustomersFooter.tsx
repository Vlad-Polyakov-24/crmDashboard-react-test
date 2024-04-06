import styles from './customers.module.scss';
import Pagination from "../../components/UI/Pagination/Pagination.tsx";

const CustomersFooter = () => {
    return (
        <footer className={styles.customers__footer}>
            <p className={styles.info}>Showing data 1 to 8 of 256K entries</p>
            <Pagination/>
        </footer>
    );
};

export default CustomersFooter;

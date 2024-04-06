import styles from './customers.module.scss';
import Search from "../../components/UI/Search/Search.tsx";

const CustomersHeader = () => {
    return (
        <header className={styles.customers__header}>
            <div>
                <h3 className={styles.title}>All Customers</h3>
                <small className={styles.subtitle}>Active Members</small>
            </div>
            <Search/>
        </header>
    );
};

export default CustomersHeader;

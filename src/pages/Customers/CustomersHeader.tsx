import styles from './customers.module.scss';
import Search from "../../components/UI/Search/Search.tsx";
import { ISearchProps } from "../../components/UI/Search/Search.tsx";

const CustomersHeader = (props: ISearchProps) => {
    return (
        <header className={styles.customers__header}>
            <div>
                <h3 className={styles.title}>All Customers</h3>
                <small className={styles.subtitle}>Active Members</small>
            </div>
            <Search onSearch={props.onSearch} searchQuery={props.searchQuery}/>
        </header>
    );
};

export default CustomersHeader;

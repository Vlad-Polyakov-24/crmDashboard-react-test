import styles from './customers.module.scss';
import Pagination from "../../components/UI/Pagination/Pagination.tsx";
import { IPaginationProps } from "../../components/UI/Pagination/Pagination.tsx";

interface ICustomersFooterProps extends IPaginationProps {
    customersLength: number;
    customersPerPage: number;
}

const CustomersFooter = (props: ICustomersFooterProps) => {
    const showingDataFrom = props.currentPage * props.customersPerPage - (props.customersPerPage - 1);
    const showingDataTo = props.currentPage * props.customersPerPage;

    return (
        <footer className={styles.customers__footer}>
            <p className={styles.info}>Showing data {showingDataFrom} to {showingDataTo} of {props.customersLength} entries</p>
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
        </footer>
    );
};

export default CustomersFooter;

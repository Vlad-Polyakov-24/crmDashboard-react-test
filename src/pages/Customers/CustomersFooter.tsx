import styles from './customers.module.scss';
import Pagination from "../../components/UI/Pagination/Pagination.tsx";
import { IPaginationProps } from "../../components/UI/Pagination/Pagination.tsx";

interface ICustomersFooterProps extends IPaginationProps {
    customersLength: number;
    customersPerPage: number;
}

const CustomersFooter = ({currentPage, customersPerPage, customersLength, ...rest}: ICustomersFooterProps) => {
    const showingDataFrom = currentPage * customersPerPage - (customersPerPage - 1);
    const showingDataTo = currentPage * customersPerPage;

    return (
        <footer className={styles.customers__footer}>
            <p className={styles.info}>Showing data {showingDataFrom > customersLength ? customersLength : showingDataFrom} to {showingDataTo > customersLength ? customersLength : showingDataTo} of {customersLength} entries</p>
            {customersLength > 0 && <Pagination
                totalPages={rest.totalPages}
                currentPage={currentPage}
                setCurrentPage={rest.setCurrentPage}
            />}
        </footer>
    );
};

export default CustomersFooter;

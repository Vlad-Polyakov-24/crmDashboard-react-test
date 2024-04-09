import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customersActions } from "../../store/customersSlice";
import { RootState } from "../../store";
import { ICustomer } from "../../store/customersSlice";
import styles from './customers.module.scss';
import Card from "../../components/UI/Card/Card";
import CustomersHeader from "./CustomersHeader";
import CustomersFooter from "./CustomersFooter";
import CustomersTable from "./CustomersTable";
import Spinner from "../../components/UI/Spinner/Spinner";

const Customers = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);
    const isLoading = useSelector((state: RootState) => state.customers.isLoading);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [customersPerPage] = useState<number>(8);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCustomers = customers.filter((customer) => customer.name.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        const checkData = (response: Response) => {
            if (!response.ok) throw Error('Fetch error!');
        }

        const fetchCustomers = async () => {
            dispatch(customersActions.toggleLoading(true));
            try {
                const response = await fetch('https://dashboard-db-5db86-default-rtdb.firebaseio.com/customers.json');
                checkData(response);
                const data = await response.json();
                const fetchedCustomers: Awaited<Promise<ICustomer[]>> = [];

                for (const key in data) fetchedCustomers.push(data[key]);

                dispatch(customersActions.setCustomers(fetchedCustomers));
            } catch (e) {
                if (e instanceof Error) console.error(e.message);
            } finally {
                dispatch(customersActions.toggleLoading(false));
            }
        };

        fetchCustomers();
    }, [dispatch]);

    const lastCustomerIndex: number = currentPage * customersPerPage;
    const firstCustomerIndex: number = lastCustomerIndex - customersPerPage;
    const currentCustomers = filteredCustomers.slice(firstCustomerIndex, lastCustomerIndex);
    const totalPages: number = Math.ceil(filteredCustomers.length / customersPerPage);

    return (
        <Card>
            <section className={styles.customers}>
                <CustomersHeader onSearch={setSearchQuery} searchQuery={searchQuery}/>
                {isLoading && (<>
                    <p className={styles.customers__loading}>Loading...</p>
                    <Spinner/>
                </>)}
                {!isLoading && filteredCustomers.length > 0 && <article className={styles.customers__body}>
                    <CustomersTable customers={currentCustomers}/>
                </article>}
                {!isLoading && filteredCustomers.length === 0 && <p className={styles.customers__loading}>No data!</p>}
                {!isLoading && <CustomersFooter
                    customersLength={filteredCustomers.length}
                    customersPerPage={customersPerPage}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />}
            </section>
        </Card>
    );
};

export default Customers;

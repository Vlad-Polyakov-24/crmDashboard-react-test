import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customersActions } from "../../store/customersSlice";
import { RootState } from "../../store";
import styles from './customers.module.scss';
import Card from "../../components/UI/Card/Card";
import CustomersHeader from "./CustomersHeader";
import CustomersFooter from "./CustomersFooter";
import CustomersTable from "./CustomersTable";
import Spinner from "../../components/UI/Spinner/Spinner";

export interface ICustomer {
    id?: string,
    name: string,
    company: string,
    phone: string,
    email: string,
    country: string,
    status: boolean,
}

const Customers = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);
    const isLoading = useSelector((state: RootState) => state.customers.isLoading);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [customersPerPage] = useState<number>(8);

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
    const currentCustomers: ICustomer[] = customers.slice(firstCustomerIndex, lastCustomerIndex);
    const totalPages: number = Math.ceil(customers.length / customersPerPage);

    return (
        <Card>
            <section className={styles.customers}>
                <CustomersHeader/>
                <article className={styles.customers__body}>
                    {isLoading && (<>
                        <p className={styles.customers__loading}>Loading...</p>
                        <Spinner/>
                    </>)}
                    {!isLoading && <CustomersTable customers={currentCustomers}/>}
                </article>
                {!isLoading && <CustomersFooter
                    customersLength={customers.length}
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

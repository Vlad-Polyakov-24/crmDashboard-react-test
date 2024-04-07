import styles from './customers.module.scss';
import Card from "../../components/UI/Card/Card.tsx";
import CustomersHeader from "./CustomersHeader.tsx";
import CustomersFooter from "./CustomersFooter.tsx";
import CustomersTable from "./CustomersTable.tsx";


const Customers = () => {
    return (
        <Card>
            <section className={styles.customers}>
                <CustomersHeader/>
                <article className={styles.customers__body}>
                    <CustomersTable/>
                </article>
                <CustomersFooter/>
            </section>
        </Card>
    );
};

export default Customers;

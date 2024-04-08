import styles from './customers.module.scss';
import '../../assets/styles/components/table.scss';
import CustomersTableRow from "./CustomersTableRow.tsx";
import { ICustomer } from "./Customers.tsx";

interface ICustomersTableProps {
    customers: ICustomer[],
}

const CustomersTable = (props: ICustomersTableProps) => {
    return (
        <div className={styles.customers__table}>
            <table className="table">
                <thead>
                <tr className="table__tr">
                    <th className="table__th">Customer Name</th>
                    <th className="table__th">Company</th>
                    <th className="table__th">Phone Number</th>
                    <th className="table__th">Email</th>
                    <th className="table__th">Country</th>
                    <th className="table__th">Status</th>
                </tr>
                </thead>
                <tbody>
                {props.customers.map(({id, name, company, phone, email, country, status}) =>
                    <CustomersTableRow
                        key={id}
                        name={name}
                        company={company}
                        phone={phone}
                        email={email}
                        country={country}
                        status={status}
                    />)}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersTable;

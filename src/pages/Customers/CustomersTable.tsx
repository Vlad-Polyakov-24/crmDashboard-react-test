import styles from './customers.module.scss';
import '../../assets/styles/components/table.scss';
import CustomersTableRow from "./CustomersTableRow.tsx";

interface ICustomer {
    id: string,
    name: string,
    company: string,
    phone: string,
    email: string,
    country: string,
    status: boolean,
}

const DATA: ICustomer[] = [
    {
        id: '1',
        name: 'Jane Cooper',
        company: 'Microsoft',
        phone: '(225) 555-0118',
        email: 'jane@microsoft.com',
        country: 'United States',
        status: true,
    },
    {
        id: '2',
        name: 'Floyd Miles',
        company: 'Yahoo',
        phone: '(205) 555-0100',
        email: 'floyd@yahoo.com',
        country: 'Kiribati',
        status: false,
    },
    {
        id: '3',
        name: 'Ronald Richards',
        company: 'Adobe',
        phone: '(302) 555-0107',
        email: 'ronald@adobe.com',
        country: 'Israel',
        status: false,
    },
    {
        id: '4',
        name: 'Marvin McKinney',
        company: 'Tesla',
        phone: '(252) 555-0126',
        email: 'marvin@tesla.com',
        country: 'Iran',
        status: true,
    },
    {
        id: '5',
        name: 'Jerome Bell',
        company: 'Google',
        phone: '(629) 555-0129',
        email: 'jerome@google.com',
        country: 'Réunion',
        status: true,
    },
    {
        id: '6',
        name: 'Kathryn Murphy',
        company: 'Microsoft',
        phone: '(406) 555-0120',
        email: 'kathryn@microsoft.com',
        country: 'Curaçao',
        status: true,
    },
    {
        id: '7',
        name: 'Jacob Jones',
        company: 'Yahoo',
        phone: '(208) 555-0112',
        email: 'Brazil',
        country: 'United States',
        status: true,
    },
    {
        id: '8',
        name: 'Kristin Watson',
        company: 'Facebook',
        phone: '(704) 555-0127',
        email: 'kristin@facebook.com',
        country: 'Åland Islands',
        status: false,
    },
];

const CustomersTable = () => {
    const customers = DATA.map(({id, name, company, phone, email, country, status}) =>
        <CustomersTableRow key={id} name={name} company={company} phone={phone} email={email} country={country} status={status}/>);

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
                <tbody>{customers.map(customer => customer)}</tbody>
            </table>
        </div>
    );
};

export default CustomersTable;

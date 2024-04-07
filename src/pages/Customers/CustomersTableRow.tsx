import Status from "../../components/UI/Status/Status.tsx";

interface ICustomersTableRowProps {
    name: string,
    company: string,
    phone: string,
    email: string,
    country: string,
    status: boolean,
}

const CustomersTableRow = (props: ICustomersTableRowProps) => {
    return (
        <tr className="table__tr">
            <td className="table__td">{props.name}</td>
            <td className="table__td">{props.company}</td>
            <td className="table__td"><a href={`tel:${props.phone}`}>{props.phone}</a></td>
            <td className="table__td"><a href={`mailto:${props.email}`}>{props.email}</a>
            </td>
            <td className="table__td">{props.country}</td>
            <td className="table__td"><Status status={props.status}/></td>
        </tr>
    );
};

export default CustomersTableRow;
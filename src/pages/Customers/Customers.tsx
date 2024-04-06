import Card from "../../components/UI/Card/Card.tsx";
import CustomersHeader from "./CustomersHeader.tsx";
import CustomersFooter from "./CustomersFooter.tsx";

const Customers = () => {
    return (
        <Card>
            <section className="customers">
                <CustomersHeader/>
                <article className="customers__body">
                    <div className="customers__table" data-scroll-hint>
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
                            <tr className="table__tr">
                                <td className="table__td">Jane Cooper</td>
                                <td className="table__td">Microsoft</td>
                                <td className="table__td"><a href="tel:2255550118">(225) 555-0118</a></td>
                                <td className="table__td"><a href="mailto:jane@microsoft.com">jane@microsoft.com</a>
                                </td>
                                <td className="table__td">United States</td>
                                <td className="table__td"><span className="status status--active">Active</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Floyd Miles</td>
                                <td className="table__td">Yahoo</td>
                                <td className="table__td"><a href="tel:2055550100">(205) 555-0100</a></td>
                                <td className="table__td"><a href="mailto:floyd@yahoo.com">floyd@yahoo.com</a></td>
                                <td className="table__td">Kiribati</td>
                                <td className="table__td"><span className="status status--inactive">Inactive</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Ronald Richards</td>
                                <td className="table__td">Adobe</td>
                                <td className="table__td"><a href="tel:3025550107">(302) 555-0107</a></td>
                                <td className="table__td"><a href="mailto:ronald@adobe.com">ronald@adobe.com</a></td>
                                <td className="table__td">Israel</td>
                                <td className="table__td"><span className="status status--inactive">Inactive</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Marvin McKinney</td>
                                <td className="table__td">Tesla</td>
                                <td className="table__td"><a href="tel:2525550126">(252) 555-0126</a></td>
                                <td className="table__td"><a href="mailto:marvin@tesla.com">marvin@tesla.com</a></td>
                                <td className="table__td">Iran</td>
                                <td className="table__td"><span className="status status--active">Active</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Jerome Bell</td>
                                <td className="table__td">Google</td>
                                <td className="table__td"><a href="tel:6295550129">(629) 555-0129</a></td>
                                <td className="table__td"><a href="mailto:jerome@google.com">jerome@google.com</a></td>
                                <td className="table__td">Réunion</td>
                                <td className="table__td"><span className="status status--active">Active</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Kathryn Murphy</td>
                                <td className="table__td">Microsoft</td>
                                <td className="table__td"><a href="tel:4065550120">(406) 555-0120</a></td>
                                <td className="table__td"><a
                                    href="mailto:kathryn@microsoft.com">kathryn@microsoft.com</a></td>
                                <td className="table__td">Curaçao</td>
                                <td className="table__td"><span className="status status--active">Active</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Jacob Jones</td>
                                <td className="table__td">Yahoo</td>
                                <td className="table__td"><a href="tel:2085550112">(208) 555-0112</a></td>
                                <td className="table__td"><a href="mailto:jacob@yahoo.com">jacob@yahoo.com</a></td>
                                <td className="table__td">Brazil</td>
                                <td className="table__td"><span className="status status--active">Active</span></td>
                            </tr>
                            <tr className="table__tr">
                                <td className="table__td">Kristin Watson</td>
                                <td className="table__td">Facebook</td>
                                <td className="table__td"><a href="tel:7045550127">(704) 555-0127</a></td>
                                <td className="table__td"><a href="mailto:kristin@facebook.com">kristin@facebook.com</a>
                                </td>
                                <td className="table__td">Åland Islands</td>
                                <td className="table__td"><span className="status status--inactive">Inactive</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
                <CustomersFooter/>
            </section>
        </Card>
    );
};

export default Customers;

import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./components/layout/Layout/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Product from "./pages/Product.tsx";
import Customers from "./pages/Customers/Customers.tsx";
import Income from "./pages/Income.tsx";
import Promote from "./pages/Promote.tsx";
import Help from "./pages/Help.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/dashboard' replace/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/dashboard/product' element={<Product/>}/>
                <Route path='/dashboard/customers' element={<Customers/>}/>
                <Route path='/dashboard/income' element={<Income/>}/>
                <Route path='/dashboard/promote' element={<Promote/>}/>
                <Route path='/dashboard/help' element={<Help/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Layout>
    )
}

export default App

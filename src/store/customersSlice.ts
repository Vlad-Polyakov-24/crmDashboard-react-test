import { createSlice } from "@reduxjs/toolkit";

export interface ICustomer {
    id?: string,
    name: string,
    company: string,
    phone: string,
    email: string,
    country: string,
    status: boolean,
}

interface ICustomersState {
    customers: ICustomer[];
    isLoading: boolean;
}

const initialState: ICustomersState = {
    customers: [],
    isLoading: false,
}

const customersSlice = createSlice({
    name: "customers",
    initialState: initialState,
    reducers: {
        toggleLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setCustomers: (state, action) => {
            state.customers = JSON.parse(JSON.stringify(action.payload));
        },
    },
});

const customersActions = customersSlice.actions;

export default customersSlice;
export { customersActions };
import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
    name: "customers",
    initialState: {
        customers: [],
        isLoading: false,
    },
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
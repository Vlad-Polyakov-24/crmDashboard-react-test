import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import customersSlice from "./customersSlice";

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        customers: customersSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
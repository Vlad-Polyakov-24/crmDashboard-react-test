import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        hamburgerVisibility: window.innerWidth < 1024,
        sidebarVisibility: window.innerWidth >= 1024,
    },
    reducers: {
        toggleSidebarVisibility: (prevState) => {
            prevState.sidebarVisibility = !prevState.sidebarVisibility;
        },
    },
});

const appActions = appSlice.actions;

export default appSlice;
export { appActions };
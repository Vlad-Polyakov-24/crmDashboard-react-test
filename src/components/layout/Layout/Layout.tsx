import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar.tsx";
import Main from "../Main/Main.tsx";
import Hamburger from "../../UI/Hamburger/Hamburger.tsx";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    // @ts-ignore
    const hamburgerVisibility = useSelector(state => state.app.hamburgerVisibility);

    return (
        <div className='app'>
            <Sidebar/>
            <Main>{props.children}</Main>
            {hamburgerVisibility && <Hamburger/>}
        </div>
    );
};

export default Layout;
import React from "react";
import Sidebar from "../Sidebar/Sidebar.tsx";
import Main from "../Main/Main.tsx";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div className='app'>
            <Sidebar/>
            <Main>{props.children}</Main>
        </div>
    );
};

export default Layout;
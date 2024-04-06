import React from "react";
import './main.scss';

interface Props {
    children: React.ReactNode;
}

const Main = (props: Props) => {
    return (
        <main className='main'>
            <h2 className='section-title'>Hello Evano 👋🏼,</h2>
            {props.children}
        </main>
    );
};

export default Main;

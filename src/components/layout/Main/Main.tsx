import React from "react";

interface Props {
    children: React.ReactNode;
}

const Main = (props: Props) => {
    return (
        <main className='main'>
            <h2>Hello Evano 👋🏼,</h2>
            {props.children}
        </main>
    );
};

export default Main;

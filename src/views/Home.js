import React from 'react';

//Components
import Menu from "../components/Menu/index"
import Cards from "../components/Cards/index"

export default function Home() {
    return(
        <>
            <Menu/>
            <section className="container">
                <Cards/>
            </section>
        </>
    );
}
import React from 'react';

//Components
import Menu from "../components/Menu/index"
import Characters from "../components/Characters/index"
import Banner from '../components/Banner';

export default function Home() {
    return(
        <>
            <header>
                <Menu/>
                <Banner/>
            </header>
            <Characters/>
        </>
    );
}
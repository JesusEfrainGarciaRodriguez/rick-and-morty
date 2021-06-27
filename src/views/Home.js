import React from 'react';

//Components
import Characters from "../components/Characters/index"
import Banner from '../components/Banner';

//Providers
import CharacterProvider from '../context/characters/Provider';

export default function Home() {
    return(
        <>
            <Banner/>
            <CharacterProvider>
                <Characters/>
            </CharacterProvider>
        </>
    );
}
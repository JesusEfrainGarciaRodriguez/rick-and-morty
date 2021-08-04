import React from 'react';

//Components
import Characters from "../components/Characters/index"
import Banner from '../components/Banner';

//Providers
import CharacterProvider from '../context/characters/Provider';

const Index = () => {
    return (
        <>
            <Banner/>
            <CharacterProvider>
                <Characters/>
            </CharacterProvider>
        </>
    );
}
 
export default Index;
import React, { useContext, useEffect } from 'react';
import './index.css';

//Component
import Card from './Card';

//Context
import CharacterContext from '../../context/characters';

export default function Cards() {
    const { getCharacters, characters } = useContext(CharacterContext);

    useEffect(() => {
        getCharacters().catch(null);
        console.log(characters);
    }, []);

    return(
        <div className="container-characters">
            {characters?.map((value) => <Card key={value.id} {...value}/>)}
        </div>
    ); 
}
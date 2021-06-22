import React, { useContext, useEffect } from 'react';
import './index.css';

//Component
import Character from './Character';

//Context
import CharacterContext from '../../context/characters';

export default function List() {
    const { getCharacters, characters } = useContext(CharacterContext);

    useEffect(() => {
        getCharacters().catch(null);
    }, []);

    return(
        <section>
            <div className="container">
                <div className="container-characters">
                    {characters?.map((value) => <Character key={value.id} {...value}/>)}
                </div>
            </div>
        </section>
    ); 
}
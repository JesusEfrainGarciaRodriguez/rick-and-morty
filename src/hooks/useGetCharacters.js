import { useState, useEffect } from 'react';

const useGetCharacters = () => {
    const [characters, setCharacters] = useState([]);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const json = await res.json();
        setCharacters(json.results);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return characters;
}
 
export default useGetCharacters;
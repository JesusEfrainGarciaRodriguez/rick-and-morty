import { useState, useEffect } from 'react';

const useGetCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [totalCountCharacters, setTotalCountCharacters] = useState(0);
    const [pages, setPages] = useState(0);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const json = await res.json();
        setCharacters(json.results);
        setTotalCountCharacters(json.info.count);
        setPages(json.info.pages);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const changePage = async (page) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const json = await res.json();
        setCharacters(json.results);
    }

    return {characters, totalCountCharacters, pages, changePage};
}
 
export default useGetCharacters;
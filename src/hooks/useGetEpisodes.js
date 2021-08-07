import { useState, useEffect } from 'react';

const useGetEpisodes = () => {
    const [episodes, setEpisodes] = useState([]);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/episode');
        const json = await res.json();
        setEpisodes(json.results);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return episodes;
}
 
export default useGetEpisodes;
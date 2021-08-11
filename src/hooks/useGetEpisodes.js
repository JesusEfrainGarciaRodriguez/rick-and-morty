import { useState, useEffect } from 'react';

const useGetEpisodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pages, setPages] = useState(0);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/episode');
        const json = await res.json();
        setEpisodes(json.results);
        setTotalCount(json.info.count);
        setPages(json.info.pages);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const changePage = async (page) => {
        const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        const json = await res.json();
        setEpisodes(json.results);
    }

    return {episodes, totalCount, pages, changePage};
}
 
export default useGetEpisodes;
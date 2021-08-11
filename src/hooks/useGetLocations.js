import { useState, useEffect } from 'react';

const useGetLocations = () => {
    const [locations, setLocations] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pages, setPages] = useState(0);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/location');
        const json = await res.json();
        setLocations(json.results);
        setTotalCount(json.info.count);
        setPages(json.info.pages);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const changePage = async (page) => {
        const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        const json = await res.json();
        setLocations(json.results);
    }

    return {locations, totalCount, pages, changePage};
}
 
export default useGetLocations;
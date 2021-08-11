import { useState, useEffect } from 'react';

const useGetLocations = () => {
    const [locations, setLocations] = useState([]);
    const [totalCountLocations, setTotalCountLocations] = useState(0);
    const [pages, setPages] = useState(0);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/location');
        const json = await res.json();
        setLocations(json.results);
        setTotalCountLocations(json.info.count);
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

    return {locations, totalCountLocations, pages, changePage};
}
 
export default useGetLocations;
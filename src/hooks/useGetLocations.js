import { useState, useEffect } from 'react';

const useGetLocations = () => {
    const [locations, setLocations] = useState([]);

    const fetchApi = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/location');
        const json = await res.json();
        setLocations(json.results);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return locations;
}
 
export default useGetLocations;
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';

const useGetLocations = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/location?page=${currentPage}&name=${name}`);
    const [locations, setLocations] = useState({
        data: [],
        pages: 0,
        totalCount: 0
    })

    const updateData = () => {
        setLocations({
            data: data?.results,
            pages: data?.info?.pages,
            totalCount: data?.info?.count
        });
    }

    useEffect(() => {
        updateData();
    }, [data])

    return {locations, changePage, isLoading, searchByName, currentPage};
}
 
export default useGetLocations;
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';
import { URL_LOCATIONS, FILTERS_NAME, FILTERS_PAGE } from '../constants';

const useGetLocations = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading, hasError } = useFetch(`${URL_LOCATIONS}?${FILTERS_PAGE}=${currentPage}&${FILTERS_NAME}=${name}`);
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

    return {locations, changePage, isLoading, searchByName, currentPage, hasError};
}
 
export default useGetLocations;
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';
import { URL_EPISODES, FILTERS_NAME, FILTERS_PAGE } from '../constants';

const useGetEpisodes = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading, hasError } = useFetch(`${URL_EPISODES}?${FILTERS_PAGE}=${currentPage}&${FILTERS_NAME}=${name}`);
    const [episodes, setEpisodes] = useState({
        data: [],
        pages: 0,
        totalCount: 0
    })

    const updateData = () => {
        setEpisodes({
            data: data?.results,
            pages: data?.info?.pages,
            totalCount: data?.info?.count
        });
    }

    useEffect(() => {
        updateData();
    }, [data])

    return {episodes, changePage, isLoading, searchByName, currentPage, hasError};
}
 
export default useGetEpisodes;
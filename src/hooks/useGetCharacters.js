import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';
import { URL_CHARACTERS, FILTERS_NAME, FILTERS_PAGE } from '../constants';

const useGetCharacters = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading } = useFetch(`${URL_CHARACTERS}?${FILTERS_PAGE}=${currentPage}&${FILTERS_NAME}=${name}`);
    const [characters, setCharacters] = useState({
        data: [],
        pages: 0,
        totalCount: 0
    })

    const updateData = () => {
        setCharacters({
            data: data?.results,
            pages: data?.info?.pages,
            totalCount: data?.info?.count
        });
    }

    useEffect(() => {
        updateData();
    }, [data])

    return {characters, changePage, isLoading, searchByName, currentPage};
}
 
export default useGetCharacters;
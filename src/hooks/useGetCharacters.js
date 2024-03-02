import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';

const useGetCharacters = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${name}`);
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
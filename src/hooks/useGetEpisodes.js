import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useFilters from './useFilters';

const useGetEpisodes = () => {
    const { currentPage, name, changePage, searchByName } = useFilters();
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}&name=${name}`);
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

    return {episodes, changePage, isLoading, searchByName, currentPage};
}
 
export default useGetEpisodes;
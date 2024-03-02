import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useGetEpisodes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState("");
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}&name=${name}`);
    const [episodes, setEpisodes] = useState({
        data: [],
        pages: 0,
        totalCount: 0
    })

    const changePage = (page) => {
        setCurrentPage(page);
    }

    const updateData = () => {
        setEpisodes({
            data: data?.results,
            pages: data?.info?.pages,
            totalCount: data?.info?.count
        });
    }

    const searchByName = (name) => {
        setName(name);
        changePage(1);
    }

    useEffect(() => {
        updateData();
    }, [data])

    return {episodes, changePage, isLoading, searchByName, currentPage};
}
 
export default useGetEpisodes;
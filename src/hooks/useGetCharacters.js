import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useGetCharacters = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState("");
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${name}`);
    const [characters, setCharacters] = useState({
        data: [],
        pages: 0,
        totalCount: 0
    })

    const changePage = (page) => {
        setCurrentPage(page);
    }

    const updateData = () => {
        setCharacters({
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

    return {characters, changePage, isLoading, searchByName, currentPage};
}
 
export default useGetCharacters;
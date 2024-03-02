import { useState } from "react";

const useFilters = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState("");

    const changePage = (page) => {
        setCurrentPage(page);
    }

    const searchByName = (name) => {
        setName(name);
        changePage(1);
    }

    return {currentPage, name, changePage, searchByName}
}

export default useFilters
import React, { useState } from 'react';
import styled from 'styled-components';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({searchByName}) => {
    const [searchValue, setSearchValue] = useState("");

    const onInputChange = ({ target }) => {
        setSearchValue(target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchByName(searchValue)
    }

    return (
        <Search onSubmit={onSubmit}>
            <Input id="search" name="search" type="text" value={searchValue} onChange={onInputChange}/>
            <Icon type="button" onClick={onSubmit}>
                <FontAwesomeIcon icon={faSearch} />
            </Icon>
        </Search>
    );
}

const Search = styled.form`
    width: 350px;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Input = styled.input`
    width: 90%;
    outline: none;
    padding: 5px 15px;
    font-size: 1.2rem;
    border-radius: 5px 0 0 5px;
    border: none;
`;

const Icon = styled.button`
    width: 40px;
    height: auto;
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
    background: rgb(60,62,68);
    color: white;
    border-radius: 0 5px 5px 0;
`;
 
export default SearchBar;
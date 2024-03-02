import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({changePage, pages, currentPage}) => {

    // Obtener un arreglo con todos los numeros de pagina
    const arrayNumberOfPages = [];
    for(let i=1; i <= pages ; i++) {
        arrayNumberOfPages.push(i);
    }

    function goToNextPage() {
        const page = currentPage + 1;
        if(page < pages + 1) {
            changePage(page);
            window.scrollTo(0, 0);
        }
    }

    function goToPreviousPage() {
        const page = currentPage - 1;
        if(page > 0) {
            changePage(page);
            window.scrollTo(0, 0);
        }
    }

    function onChangePage(event) {
        const pageNumber = Number(event.target.textContent);
        if(pageNumber >= 1 && pageNumber <= pages ) {
            changePage(pageNumber);
            window.scrollTo(0, 0);
        }
    }

    const getPaginationGroup = () => {
        if(currentPage < 4) {
            // Devolver arreglo iniciando del 1 hasta el 5
            return arrayNumberOfPages.slice(0,currentPage+4)
        }
        if(currentPage > pages - 4 && pages-7 >= 1) {
            // Devolver arreglo con los 7 numeros ultimos del arreglo hasta el final
            return arrayNumberOfPages.slice(pages-7)
        }
        // Devolver arreglo desde los 3 numeros anteriores y posteriores
        return arrayNumberOfPages.slice(currentPage-4,currentPage+3);
    }

    return (
        <Container>
            <ButtonContainer>
                { currentPage !== 1 &&
                    <Button onClick={goToPreviousPage}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </Button>
                }

                {getPaginationGroup().map((item, index) => (
                    <Button
                    key={index}
                    onClick={onChangePage}
                    active={currentPage === item ? true : false}
                    >
                        {item}
                    </Button>
                ))}

                { currentPage !== pages && 
                    <Button onClick={goToNextPage}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Button>
                }
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    width: auto;

    button:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

const Button = styled.button`
    width: auto;
    background: ${props => props.active ? 'white' : 'rgb(60,62,68)'};
    color: ${props => props.active ? 'black' : 'white'};
    padding: 10px;
    font-size: 1.125rem;
    cursor: pointer;
    border: none;
    outline: none;
    
    @media (min-width: 768px) {
        &:hover {
            background: white;
            color: black;
        }
    }
`;
 
export default Pagination;
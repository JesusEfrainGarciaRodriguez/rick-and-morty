import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({changePage, pages}) => {
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        const page = currentPage + 1;
        if(page < pages + 1) {
            changePage(page);
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    }

    function goToPreviousPage() {
        const page = currentPage - 1;
        if(page > 0) {
            changePage(page);
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    }

    function onChangePage(event) {
        const pageNumber = Number(event.target.textContent);
        if(pageNumber >= 1 && pageNumber <= pages ) {
            setCurrentPage(pageNumber);
            changePage(pageNumber);
            window.scrollTo(0, 0);
        }
    }

    const getPaginationGroup = () => {
        let array = [];
        // Obtener un arreglo con todos los numeros de pagina
        for(let i=1; i < pages + 1 ; i++) {
            array.push(i);
        }
        // Si la pagina actual es menor a 5
        if(currentPage < 4) {
            // Devolver arreglo iniciando del 1 hasta el 5
            return array.slice(0,currentPage+4)
        }
        // Devolver arreglo desde los 3 numeros anteriores y posteriores
        return array.slice(currentPage-4,currentPage+3);
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
import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <CardContainer>
        <CardTitle>
            No results found
        </CardTitle>
    </CardContainer>
  )
}

const CardContainer = styled.article`
    background: rgb(60, 62, 68);
    width: 100%;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 70px 0;
`;

const CardTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    text-align: center;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default NotFound
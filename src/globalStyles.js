import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'PT Sans', sans-serif;
        scroll-behavior: smooth;
    } 
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: auto;
    overflow: hidden;
`;

export const Section = styled.section`
    width: 100%;
    background: ${(props) => props.black ? "rgb(36,40,47)" : "white"};
    padding: 70px 0;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px 0;
`;

export default GlobalStyle;
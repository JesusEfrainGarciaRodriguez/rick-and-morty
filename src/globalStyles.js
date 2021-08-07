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
`;

export const Section = styled.section`
    width: 100%;
    background: ${(props) => props.black ? "rgb(36,40,47)" : "white"};
    padding-top: 50px;
    padding-bottom: 50px;
`;

export default GlobalStyle;
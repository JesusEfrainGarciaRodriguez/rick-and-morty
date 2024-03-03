import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'PT Sans', sans-serif;
        scroll-behavior: smooth;
    } 

    body {
        background: #202329;
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

export default GlobalStyle;
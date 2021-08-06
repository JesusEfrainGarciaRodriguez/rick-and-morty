import styled from "styled-components";
import { Container } from "../globalStyles";

const CardsContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    background: rgb(60, 62, 68);
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.75rem;

    @media screen and (max-width:500px) {
        flex-direction: column;
        width: 380px;
    }
`;

const CardImageContainer = styled.div`
    flex: 2 1 0%;
    overflow: hidden;

    img {
        border-radius: 5px 0 0 5px;
        vertical-align: top;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width:500px) {
            height: 300px;
            width: 100%;
            border-radius: 5px 5px 0 0;
        }
    }

    @media screen and (max-width:500px) {
        width: 100%;
    }
`;

const CardBody = styled.div`
    flex: 3 1 0%;
    padding: 20px;
    color: white;

    @media screen and (max-width:500px) {
        width: 100%;
    }
`;

const CardTitle = styled.h5`
    font-size: 1.5em;
`;

const CardText = styled.p`
    margin-bottom: 10px;
    line-height: 25px;

    span {
        color: rgb(158, 158, 158);
        display: block;
        font-size: 0.9375rem;
        font-weight: bold;
    }
`;

export { CardsContainer, Card, CardImageContainer, CardBody, CardTitle, CardText };
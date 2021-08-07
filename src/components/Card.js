import styled from "styled-components";

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    background: rgb(60, 62, 68);
    /* min-width: 100%; */
    width: 300px;
    overflow: hidden;
    border-radius: 5px;
`;

const CardImage = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 10px 5px;
`;

const CardTitle = styled.h5`
    text-transform: uppercase;
    letter-spacing: 2px;
    /* margin-top: 10px; */
    margin: 10px 0;
    color: white;
    text-align: center;
    font-size: 16px;
`;

const CardText = styled.p`
    margin-bottom: 10px;
    line-height: 25px;
    color: white;

    span {
        color: rgb(158, 158, 158);
        display: block;
        font-size: 0.9375rem;
        font-weight: bold;
    }
`;

export { CardsContainer, Card, CardImage, CardBody, CardTitle, CardText };
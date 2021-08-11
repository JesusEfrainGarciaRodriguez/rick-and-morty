import styled, { css } from "styled-components";

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    background: rgb(60, 62, 68);
    width: 300px;
    overflow: hidden;
    border-radius: 5px;

    ${props => props.row && css`
        display: flex;
        flex-direction: row;
        width: 600px;
        height: 220px;
        margin: 10px 10px;

        @media screen and (max-width:500px) {
            flex-direction: column;
            width: 100%;
            height: 100%;
        }
    `}
`;

const CardImageContainer = styled.div`
    flex: 2 1 0%;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CardBody = styled.div`
    flex: 3 1 0%;
    width: 100%;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
`;

const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
`;

const CardTitle = styled.h5`
    text-transform: uppercase;
    letter-spacing: 2px;
    height: 50px;
    color: white;
    text-align: center;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardText  = styled.p`
    line-height: 25px;
    color: white;
    display: flex;
    align-items: center;
`;

const CardTextGray = styled.p`
    color: rgb(158, 158, 158);
    font-size: 0.9375rem;
    font-weight: bold;
`;

const CardStatusIcon = styled.span`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;

    ${props => props.status === "Alive" && "background: rgb(85, 204, 68)"}
    ${props => props.status === "Dead" && "background: rgb(214, 61, 46)"}
    ${props => props.status === "unknown" && "background: rgb(158, 158, 158)"}
`;

export { CardsContainer, Card, CardImageContainer, CardBody, CardSection, CardTitle, CardText, CardTextGray, CardStatusIcon };
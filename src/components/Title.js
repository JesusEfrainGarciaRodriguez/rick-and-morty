import styled from "styled-components";

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px 0;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;

export { Title, TitleContainer };
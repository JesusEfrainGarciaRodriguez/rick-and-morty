import React from 'react';
import styled from "styled-components";

//assets
import banner from '../assets/img/banner.png';

const BannerContainer = styled.div`
    text-align: center;
    margin: 60px 0px;
    background-color: white;

`;

const BannerImage = styled.img`
    width: 100%;
    max-width: 622px;
    height: auto;
`;

const Banner = () => {
    return(
        <BannerContainer>
            <BannerImage src={banner} alt="rick and morty"/>
        </BannerContainer>
    );
}

export default Banner;
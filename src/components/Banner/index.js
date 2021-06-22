import React from 'react';
import './index.css';

//assets
import banner from '../../assets/img/banner.png';

export default function Banner() {
    return(
        <div className="banner">
            <img src={banner} alt="banner"/>
        </div>
    );
}
import React from 'react';
import './index.css';

//assets
import logo from '../../assets/img/logo.png';

export default function Menu() {
    return(
        <div className="menu">
            <div className="container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
                </div>
                <nav className="navbar">
                    <a href="#">Characters</a>
                    <a href="#">Locations</a>
                    <a href="#">Episodes</a>
                </nav>
            </div>
        </div>
    );
}
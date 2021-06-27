import React from 'react';
import './index.css';

//assets
import logo from '../../assets/img/logo.png';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {

    function navResponsive() {
        var x = document.getElementById("navbar-nav");
        if (x.className === "navbar-nav") {
            x.className += " show";
        } else {
            x.className = "navbar-nav";
        }
    }

    return(
        <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
                </div>
                <a className="icon" onClick={navResponsive}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
                <div id="navbar-nav" className="navbar-nav">
                    <a href="#">Characters</a>
                    <a href="#">Locations</a>
                    <a href="#">Episodes</a>
                </div>
        </nav>
    );
}
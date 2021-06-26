import React from 'react';
import './index.css';

//assets
import logo from '../../assets/img/logo.png';

export default function Menu() {

    function myFunction() {
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
                <a className="icon" onClick={myFunction}>X</a>
                <div id="navbar-nav" className="navbar-nav">
                    <a href="#">Characters</a>
                    <a href="#">Locations</a>
                    <a href="#">Episodes</a>
                </div>
        </nav>
    );
}
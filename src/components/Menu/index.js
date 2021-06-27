import React, { useState } from 'react';
import './index.css';

//assets
import logo from '../../assets/img/logo.png';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
    const [open,setOpen] = useState(false);

    return(
        <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
                </div>
                <a id="icon" className="icon" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open? faTimes: faBars}/>
                </a>
                <div id="navbar-nav" className={`navbar-nav ${open?"show":""}`}>
                    <a href="#">Characters</a>
                    <a href="#">Locations</a>
                    <a href="#">Episodes</a>
                </div>
        </nav>
    );
}
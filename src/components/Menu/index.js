import React, { useState } from 'react';
import './index.css';

//assets
import logo from '../../assets/img/logo.png';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
    const [open,setOpen] = useState(false);
    let url = "";
    return(
        <nav className="navbar">
                <div className="navbar-logo">
                    <a href={url}><img src={logo} alt="logo"/></a>
                </div>
                <span id="icon" className="icon" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open? faTimes: faBars}/>
                </span>
                <div id="navbar-nav" className={`navbar-nav ${open?"show":""}`}>
                    <a href={url}>Characters</a>
                    <a href={url}>Locations</a>
                    <a href={url}>Episodes</a>
                </div>
        </nav>
    );
}
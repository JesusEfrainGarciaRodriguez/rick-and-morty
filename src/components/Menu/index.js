import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <span id="icon" className="icon" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open? faTimes: faBars}/>
                </span>
                <div id="navbar-nav" className={`navbar-nav ${open?"show":""}`}>
                    <Link to="/characters"><span>Characters</span></Link>
                    <Link to="/locations"><span>Locations</span></Link>
                    <Link to="/episodes"><span>Episodes</span></Link>
                </div>
        </nav>
    );
}
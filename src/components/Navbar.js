import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// img
import logo from "../assets/img/logo.png";

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Link to="/">
                <NavLogo src={logo} alt="rick and morty" />
            </Link>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={ isOpen ? faTimes : faBars}/>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/episodes">Episodes</NavLink>
            </Menu>
        </Nav>
    );
}

const Nav = styled.div`
    background-color: white;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #E2E8F0;
`;

const NavLogo = styled.img`
    width: 50px;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    font-size: 28px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => isOpen ? "300px": "0"};
        transition: max-height 0.5s ease;
    }
`;

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    margin: 16px 20px;
    color: black;
    font-size: 1.25em;
    cursor: pointer;
`;
 
export default Navbar;
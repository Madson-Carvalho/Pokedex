import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCircleInfo, faGamepad, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Nav.css';


function Nav() {
    return (
        <nav>
            <Link to="/"><FontAwesomeIcon icon={faHome}/> HOME</Link>
            <Link to="#"><FontAwesomeIcon icon={faCircleInfo}/> SOBRE</Link>
            <Link to="/pokemon"><FontAwesomeIcon icon={faGamepad}/> POKÉMON</Link>
            <Link to="#"><FontAwesomeIcon icon={faAddressBook}/> CONTATO</Link>
        </nav>
    )
}

export default Nav;
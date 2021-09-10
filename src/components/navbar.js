import React from 'react';
// Fontawesome imports here:
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';
const navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            
            <a className="navbar-brand" href="#home">
                <img src="https://i.imgur.com/7Ba9JtI.png"   alt="logo"  /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border:"none",boxShadow:"none",}} >
                        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#links">Links</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
           
        </nav>
    )
}

export default navbar

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import "../components/Header.css";
import "../Lato/Lato-Bold.ttf"




function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <Link to="/" >
                    <img
                    className="header__logo"
                    src={logo}
                    alt="logo"
                    />
                </Link>
            </div>
            
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <span>Home</span>
                </Link>

                <Link to="/about" className="header__link">
                    <span>About Me</span>
                </Link>

                <Link to="/properties" className="header__link">
                    <span>Properties</span>
                </Link>

                <Link to="/contact" className="header__link">
                    <span>Contact Me</span>
                </Link>
            </div>
            
            
        
        </nav>
    )
}

export default Header

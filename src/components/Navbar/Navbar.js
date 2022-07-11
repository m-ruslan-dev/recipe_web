import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__nav-item"><Link to="/" className="navbar__link">Home</Link></li>
                <li className="navbar__nav-item"><a href="#categories">Categories</a></li>
            </ul>
            <h3 className="navbar__logo">LOGO</h3>
            <ul className="navbar__nav">
                <li className="navbar__nav-item"><a href="#cuisines" className="navbar__link">Cuisines</a></li>
                <li className="navbar__nav-item"><Link to="/search" className="navbar__link">Search</Link></li>
            </ul>
            <ul className="navbar__nav navbar__nav--login">
                <li className="navbar__nav-item"><a href="#" className="navbar__link">Log In</a></li>
                <li className="navbar__nav-item"><a href="#" className="navbar__link">Sign Up</a></li>
            </ul>
        </nav>   
    )
}

export default Navbar;
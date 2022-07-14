import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { categories, cuisines } from "../Filters/filters_data";

let Navbar = () => {
    const [isHovering, setIsHovering] = useState({});
    return (
        <nav className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__nav-item"><Link to="/" className="navbar__link">Home</Link></li>
                <li className="navbar__nav-item" 
                    onMouseEnter={() => setIsHovering({ categories: true })} 
                    onMouseLeave={() => setIsHovering({ categories: false })}>
                    <Link to="/search" className="navbar__link">Categories</Link>
                    {isHovering.categories && <Dropdown links={categories} />}
                </li>
            </ul>
            <h3 className="navbar__logo">LOGO</h3>
            <ul className="navbar__nav">
                <li className="navbar__nav-item" 
                    onMouseEnter={() => setIsHovering({ cuisines: true })} 
                    onMouseLeave={() => setIsHovering({ cuisines: false })}>
                    <Link to="/search" className="navbar__link">Cuisines</Link>
                    {isHovering.cuisines && <Dropdown links={cuisines} />}
                </li>
                <li className="navbar__nav-item"><Link to="/search" className="navbar__link">Search</Link></li>
            </ul>
            <ul className="navbar__nav navbar__nav--login">
                <li className="navbar__nav-item"><Link to="/log-in" className="navbar__link">Log In</Link></li>
                <li className="navbar__nav-item"><Link to="/sign-up" className="navbar__link">Sign Up</Link></li>
            </ul>
        </nav>   
    )
}

export default Navbar;
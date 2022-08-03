import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { categories, cuisines } from "../Filters/filters_data";
import useMediaQuery from '../../hooks/useMediaQuery';
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
    const [isHovering, setIsHovering] = useState({});
    const isTablet = useMediaQuery("1000px");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({categories: false, cuisines: false});
    const location = useLocation();

    const dropdownClicked = (e, dropdown) => {
        e.preventDefault();
        if (isDropdownOpen[dropdown] === true) {
            setIsDropdownOpen({[dropdown]: false})
        } 
        else {
            setIsDropdownOpen({[dropdown]: true})
        }
    }

    useEffect(() => {
        isTablet && setIsMenuOpen(false);
    }, [location])

    return (
        <nav className='navbar container'>
            <div className='mobile-nav'>
                <Link to="/" className="mobile-nav__logo">Logo</Link>
                <button type='button' className='mobile-nav__menu-btn' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <HiX /> : <HiMenu />}    
                </button>
            </div>
            <div className={`navbar__holder ${isMenuOpen ? "menu-open" : "menu-close"}`}>
                <ul className='navbar__nav'>
                    <li className='navbar__nav-item' style={{order: 1}}><Link to="/" className='navbar__link'>Home</Link></li>

                    {/* Dropdown "Categories"*/}
                    <li className='navbar__nav-item' style={{order: 2}} 
                        onMouseEnter={() => isTablet || setIsHovering({categories: true})} 
                        onMouseLeave={() => isTablet || setIsHovering({categories: false})} >

                        <p className='navbar__link' 
                            onClick={(e) => isTablet && dropdownClicked(e, "categories")}>Categories</p>

                        {isHovering.categories && <Dropdown links={categories} filter="categories"/>}
                        {isDropdownOpen.categories && <Dropdown links={categories} filter="categories"/>}
                    </li>

                    {/* Dropdown "Cuisines" */}
                    <li className='navbar__nav-item' style={{order: 4}} 
                        onMouseEnter={() => isTablet || setIsHovering({cuisines: true})} 
                        onMouseLeave={() => isTablet || setIsHovering({cuisines: false})} >

                        <p className='navbar__link' 
                            onClick={(e) => isTablet && dropdownClicked(e, "cuisines")}>Cuisines</p>

                        {isHovering.cuisines && <Dropdown links={cuisines} filter="cuisines"/>}
                        {isDropdownOpen.cuisines && <Dropdown links={cuisines} filter="cuisines"/>}
                    </li>

                    <li className='navbar__nav-item' style={{order: 5}}><Link to="/search" className='navbar__link'>Search</Link></li>
                    <li className='navbar__nav-item navbar__logo' style={{order: 3}}><Link to="/">Logo</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;
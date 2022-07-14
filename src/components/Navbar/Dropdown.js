import React from 'react'
import { Link } from 'react-router-dom';


const Dropdown = ({links}) => {
    return ( <ul className='dropdown'>
        {links.map((link, i) => {
            return <li className='dropdown__item' key={i}>
                <Link to={`/search?filter=${link}`} className="dropdown__link">{link}</Link>
            </li>
        })}
    </ul> );
}
 
export default Dropdown;
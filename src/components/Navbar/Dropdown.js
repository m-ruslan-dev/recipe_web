import React from 'react'
import { Link } from 'react-router-dom';


const Dropdown = ({links, filter}) => {
    let parameter = "";
    switch (filter) {
        case "categories": {
            parameter = "c";
            break
        }
        case "cuisines": {
            parameter = "a";
            break
        }
    }
    
    return ( <ul className='dropdown'>
        {links.map((link, i) => {
            return <li className='dropdown__item' key={i}>
                <Link to={`/search?${parameter}=${link}`} className="dropdown__link">{link}</Link>
            </li>
        })}
    </ul> );
}
 
export default Dropdown;
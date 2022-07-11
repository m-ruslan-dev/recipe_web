import React from "react";
import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
    return (
        <form className="searchbar">
            <input type="input" placeholder="Find recipe" className="searchbar__input"/>
            <button type="submit" className="searchbar__submit"><FiSearch /></button>
        </form>        
    )
}

export default Searchbar;
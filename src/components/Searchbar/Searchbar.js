import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    return (
        <form action="/search" method="get" className="searchbar">
            <input className="searchbar__input" type="input" name="s" placeholder="Find recipe"/>
            <button type="submit" className="searchbar__submit"><FiSearch /></button>
        </form>        
    )
}

export default Searchbar;
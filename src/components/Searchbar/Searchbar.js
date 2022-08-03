import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let query = event.target.query.value;
        navigate(`/search?s=${query}`);
    }

    return (
        <form action="#" method="get" className="searchbar" onSubmit={(e) => handleSubmit(e)}>
            <input className="searchbar__input" type="input" name="query" placeholder="Find recipe"/>
            <button type="submit" className="searchbar__submit"><FiSearch /></button>
        </form>        
    )
}

export default Searchbar;
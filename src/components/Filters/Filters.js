import React, { useState } from "react";
import { categories, ingredients, cuisines } from "./filters_data";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FaCogs } from "react-icons/fa";

const Filters = ({setSearchParams}) => {
    const isTablet = useMediaQuery("760px");
    const [isOpen, setIsOpen] = useState(false);

    return (    
        <aside className={`filters ${isOpen ? "filters-open" : "filters-close"}`}>
                {isTablet && <button type="button" className="filters__mobile-btn" 
            onClick={() => setIsOpen(!isOpen)}><span><FaCogs /></span> Filters</button>}

                <div className="filters__category">
                    <h4 className="filters__heading">Category</h4>
                    <ul className="filters__links">
                        {categories.map((category, i) => {
                            return (
                                <li className="filters__item" key={i}>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setSearchParams({c: category});
                                    }}>{ category }</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="filters__category">
                    <h4 className="filters__heading">Main Ingredient</h4>
                    <ul className="filters__links">
                        {ingredients.map((ingredient, i) => {
                            return (
                                <li className="filters__item" key={i}>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setSearchParams({i: ingredient});
                                    }}>{ ingredient }</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="filters__category">
                    <h4 className="filters__heading">Cuisine</h4>
                    <ul className="filters__links">
                        {cuisines.map((cuisine, i) => {
                            return (
                                <li className="filters__item" key={i}>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setSearchParams({a: cuisine});
                                    }}>{ cuisine }</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </aside>
    );
};

export default Filters;
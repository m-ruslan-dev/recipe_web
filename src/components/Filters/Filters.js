import React from "react";
import { categories, ingredients, cuisines } from "./filters_data";

const Filters = ({setSearchParams}) => {
    return (    
        <aside className="filters">
                <div className="filters__category">
                    <h4 className="filters__heading">Category</h4>
                    <ul className="filters__links">
                        {categories.map((category, i) => {
                            return (
                                <li className="filters__item" key={i}>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setSearchParams({filter: category});
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
                                        setSearchParams({filter: ingredient});
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
                                        setSearchParams({filter: cuisine});
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
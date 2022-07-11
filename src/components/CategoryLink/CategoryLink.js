import React from "react";
import { Link } from "react-router-dom";

function CategoryLink({category, img}) {
    return (
        <Link to={`/search?filter=${category}`} className="category-link">
            <div className="category-link__img">
                <img src={img}></img>
            </div>
            <h2 className="category-link__name">{category}</h2>
        </Link>
    )
}

export default CategoryLink;
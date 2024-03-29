import React from "react";
import { Link } from "react-router-dom";

const RecipeCardLarge = ({title, image, id}) => {
    return (
        <div className="recipe-card-large">
            <div className="recipe-card-large__img">
                <Link to={`/recipe/${id}`}><img src={image}></img></Link>
            </div>

            <div className="recipe-card-large__holder">
                <div className="recipe-card-large__info">
                    <Link to={`/recipe/${id}`} className="recipe-card-large__title"><h2>{title}</h2></Link>
                    <hr className="recipe-card-large__underline"></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeCardLarge;
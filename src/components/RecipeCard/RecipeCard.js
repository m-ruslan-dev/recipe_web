import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, image, id }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card__img">
        <Link to={`/recipe/${id}`}>
          <img src={image}></img>
        </Link>
      </div>

      <div className="recipe-card__holder">
        <div className="recipe-card__info">
          <Link to={`/recipe/${id}`}>
            <h2 className="recipe-card__title">{title}</h2>
          </Link>
          <hr className="recipe-card__underline"></hr>
          <p className="recipe-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

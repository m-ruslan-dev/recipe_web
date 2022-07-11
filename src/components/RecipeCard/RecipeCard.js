import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineStar } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const RecipeCard = ({title, image, id}) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card__img">
                <Link to={`/recipe/${id}`}><img src={image}></img></Link>
            </div>

            <div className="recipe-card__holder">
                <div className="recipe-card__info">
                    <Link to={`/recipe/${id}`}><h2>{title}</h2></Link>
                    <hr className="recipe-card__underline"></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="recipe-card__btns">
                    <a href="#" className="recipe-card__icon" id="stars"><span><AiOutlineStar /></span>5</a>
                    <a href="#" className="recipe-card__icon" id="comments"><span><FaRegComment /></span>14</a>
                    <a href="#" className="recipe-card__icon" id="favorite"><span><MdFavoriteBorder /></span></a>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
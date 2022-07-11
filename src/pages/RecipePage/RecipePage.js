import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipeVideo from "../../components/RecipeVideo/RecipeVideo";
import Comments from "../../layouts/comments/comments";

const RecipePage = () => {
    const {id} = useParams();
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    return (<>
        <RecipeDetails url={url}/>
        <RecipeVideo url={url}/>
        <Comments />
    </>)
}

export default RecipePage;
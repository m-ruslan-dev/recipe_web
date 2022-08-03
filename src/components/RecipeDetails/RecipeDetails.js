import React from "react";
import { useState, useEffect } from "react";

const createIngredientObjects = (recipe) => {
    let recipeArray = Object.entries(recipe);
    let allIngredients = recipeArray.filter(ingr => ingr[0].includes("strIngredient") && ingr[1] != "");
    let allMeasures = recipeArray.filter(measure => measure[0].includes("strMeasure") && measure[1] != " " && measure[1] != "");
    let ingredientsArray = [];
    
    for (let i = 0; i < allIngredients.length; i++) {
        let ingredientObj = {
            ingredient: null,
            measure: null
        };

        ingredientObj.ingredient = allIngredients[i][1];
        ingredientObj.measure = allMeasures[i][1];
        ingredientsArray.push(ingredientObj);
    }
    return ingredientsArray;
}

const RecipeDetails = ({url}) => {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipe(data.meals[0]);
            let ingredients = createIngredientObjects(data.meals[0]);
            setIngredients(ingredients);
            setInstructions(data.meals[0].strInstructions.replace(/\r\n/g, "<br />"));
        })
    }, []);

    let recipeImage = recipe.strMealThumb;
    let recipeTitle = recipe.strMeal;

    return (
        <main className="recipe-details container">
            <h1 className="recipe-details__title recipe-details__title--mobile">{recipeTitle}</h1>

            <div className="recipe-details__about">
                <img src={recipeImage} className="recipe-details__img" width="300" height="280" alt="picture of the dish"></img>
                <p className="recipe-details__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore, consectetur adipiscing elit, et dolore magna aliqua.</p>
            </div>

            <div className="recipe-details__cooking">
                <article className="recipe-details__ingredients">
                    <h1 className="recipe-details__title">{recipeTitle}</h1>
                    <hr className="recipe-details__underline"></hr>
                    <h3 className="recipe-details__article-title">Ingredients</h3>

                    <ul className="recipe-details__ingredients-list">
                        {ingredients.map((ingredients, index) => {
                            const {ingredient, measure} = ingredients;
                            return <li className="recipe-details__ingredients-item" key={index}>
                                <span>{ingredient}</span>
                                <span>{measure}</span>
                            </li>
                        })}
                    </ul>
                </article>

                <article className="recipe-details__instructions">
                    <h3 className="recipe-details__article-title">Instructions</h3>
                    <p className="recipe-details__instructions-text" 
                        dangerouslySetInnerHTML={{__html: instructions}}>
                    </p>
                </article>
            </div>
        </main>
    );
}

export default RecipeDetails;
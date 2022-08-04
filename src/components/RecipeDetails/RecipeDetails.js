import React from "react";
import { useState, useEffect } from "react";

const createIngredientObjects = (recipe) => {
  let recipeArray = Object.entries(recipe);
  let allIngredients = recipeArray.filter(
    (ingr) =>
      ingr[0].includes("strIngredient") && ingr[1] != "" && ingr[1] != null
  );
  let allMeasures = recipeArray.filter(
    (measure) =>
      measure[0].includes("strMeasure") && measure[1] != " " && measure[1] != ""
  );
  let ingredientsArray = [];

  for (let i = 0; i < allIngredients.length; i++) {
    let ingredientObj = {
      ingredient: null,
      measure: null,
    };

    ingredientObj.ingredient = allIngredients[i][1];
    ingredientObj.measure = allMeasures[i][1];
    ingredientsArray.push(ingredientObj);
  }
  return ingredientsArray;
};

const RecipeDetails = ({ url }) => {
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  useEffect(async () => {
    let response = await fetch(url);
    if (response.status != 200) {
      setError("Error, could not fetch recipe");
      throw new Error("could not fetch data");
    }

    let data = await response.json();

    let recipeObj = data.meals[0];
    setRecipe(recipeObj);
    let ingredients = createIngredientObjects(recipeObj);
    setIngredients(ingredients);
    let instructions = recipeObj.strInstructions.replace(/\r\n/g, "<br />");
    setInstructions(instructions);
  }, []);

  let recipeImage = recipe.strMealThumb;
  let recipeTitle = recipe.strMeal;

  if (error) {
    return (
      <main>
        <h2>
          Error <br />
          could not fetch recipe
        </h2>
      </main>
    );
  } else {
    return (
      <main className="recipe-details container">
        <h1 className="recipe-details__title recipe-details__title--mobile">
          {recipeTitle}
        </h1>

        <div className="recipe-details__about">
          <img
            src={recipeImage}
            className="recipe-details__img"
            width="300"
            height="280"
            alt="picture of the dish"
          ></img>
          <p className="recipe-details__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore, consectetur adipiscing elit, et
            dolore magna aliqua.
          </p>
        </div>

        <div className="recipe-details__cooking">
          <article className="recipe-details__ingredients">
            <h1 className="recipe-details__title">{recipeTitle}</h1>
            <hr className="recipe-details__underline"></hr>
            <h3 className="recipe-details__article-title">Ingredients</h3>

            <ul className="recipe-details__ingredients-list">
              {ingredients.map((ingredients, index) => {
                const { ingredient, measure } = ingredients;
                return (
                  <li className="recipe-details__ingredients-item" key={index}>
                    <span>{ingredient}</span>
                    <span>{measure}</span>
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="recipe-details__instructions">
            <h3 className="recipe-details__article-title">Instructions</h3>
            <p
              className="recipe-details__instructions-text"
              dangerouslySetInnerHTML={{ __html: instructions }}
            ></p>
          </article>
        </div>
      </main>
    );
  }
};

export default RecipeDetails;

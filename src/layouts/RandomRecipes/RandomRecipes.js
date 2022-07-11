import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useFetchRandomRecipes from "../../hooks/useFetchRandomRecipes";

let RandomRecipes = () => {
    const recipes = useFetchRandomRecipes(4);

    return (
        <section className="random-recipes container">
            <h1 className="section-heading">Random Recipes</h1>
            <div className="random-recipes__recipes">
                {recipes.map((recipe) => {
                    return <RecipeCard title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal} />
                })}
            </div>
        </section>
    )
}

export default RandomRecipes;
import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useFetchRandomRecipes from "../../hooks/useFetchRandomRecipes";

let Popular = () => {
    const recipes = useFetchRandomRecipes(4);

    return (
        <section className="popular container">
            <h1 className="section-heading">Most Popular</h1>
            <div className="popular__holder">
                {recipes.map((recipe) => {
                    return <RecipeCard title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal} />
                })}
            </div>
        </section>
    )
}

export default Popular;
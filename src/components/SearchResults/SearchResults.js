import React from 'react'; 
import RecipeCardLarge from "../RecipeCard/RecipeCardLarge";
import RecipeCard from "../RecipeCard/RecipeCard";
import useMediaQuery from "../../hooks/useMediaQuery";

const SearchResults = ({recipes}) => {
    const isTablet = useMediaQuery("760px");

    if (recipes === null) {
        return <main className='search-results'>
            <h2>Recipes not found</h2>
        </main>
    }
    else {
        return (<main className='search-results'>
        {recipes.map((recipe) => {
            if (isTablet) {
                return <RecipeCard title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal} />
            }
            else {
                return <RecipeCardLarge title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal} />
            }
            })}
        </main>);
    }
}
 
export default SearchResults;
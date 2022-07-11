import React from 'react'; 
import RecipeCardLarge from "../RecipeCard/RecipeCardLarge";

const SearchResults = ({recipes}) => {

    return (<main className='search-results'>
        {recipes.map((recipe) => {
            return <RecipeCardLarge title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal} />
        })}
    </main>);
}
 
export default SearchResults;
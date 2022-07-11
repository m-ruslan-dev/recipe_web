import { useState, useEffect } from 'react';

const getAllData = async (sources) => {
    let data = [];
    for (let src of sources) {
        let response = await fetch(src);
        let newData = await response.json();
        let recipes = newData.meals;
        data = data.concat(recipes);
    }
    return data;
}

const useFetchRecipes = (sources) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(async () => {
        let allRecipes = await getAllData(sources);
        setRecipes(allRecipes);
    }, [])

    return recipes;
}
 
export default useFetchRecipes;
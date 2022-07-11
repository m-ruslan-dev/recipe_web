import { useState, useEffect } from "react";

const getRandomRecipes = async (num) => {
    let meals = [];
    for (let i = 0; i < num; i++) {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        meals.push(data.meals[0]);
    }
    return meals;
}

const useFetchRandomRecipes = (number) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(async () => {
        let recipes = await getRandomRecipes(number);
        setRecipes(recipes);
    }, []);

    return recipes;
}

export default useFetchRandomRecipes;
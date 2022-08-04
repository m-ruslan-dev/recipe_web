import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import Filters from "../../components/Filters/Filters";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useSearchParams } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const makeLink = (searchParams) => {
    let paramsKeys = searchParams.keys();
    let link = null;
    for (let key of paramsKeys) {
        if (key === "s") {
            link = `https://www.themealdb.com/api/json/v1/1/search.php?${searchParams}`
        }
        else {
            link = `https://www.themealdb.com/api/json/v1/1/filter.php?${searchParams}`
        }
    }
    return link;
};

const SearchSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(async () => {
        let recipesLink = makeLink(searchParams);
        if (recipesLink != null) {
            let response = await fetch(recipesLink);
            if (response.status != 200) {
                setError("Error: could not fetch data");
                throw new Error("Could not fetch data");
            }
            let data = await response.json();
            let recipes = data.meals;
            setRecipes(recipes);
        }
    }, [searchParams]);

    const isTablet = useMediaQuery("760px");

    return (
        <section className="search-section container">
            {isTablet || <Filters setSearchParams={setSearchParams} />}
            <div className="search-section__wrapper">
                <Searchbar />
                {isTablet && <Filters setSearchParams={setSearchParams} />}
                {error ? <h2>{error}</h2> : <SearchResults recipes={recipes} />}
            </div>
        </section>
    )
}

export default SearchSection;
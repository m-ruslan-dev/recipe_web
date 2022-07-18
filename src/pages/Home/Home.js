import React from "react";

import Hero from "../../layouts/Hero/Hero";
import Statistics from "../../layouts/Statistics/Statistics";
import Categories from "../../layouts/Categories/Categories";
import Popular from "../../layouts/Popular/Popular";
import Cuisines from "../../layouts/Cuisines/Cuisines";
import RandomRecipes from "../../layouts/RandomRecipes/RandomRecipes";
import useMediaQuery from "../../hooks/useMediaQuery";

const Home = () => {
    return (<>
        <Hero />
        <Statistics />
        <Categories />
        <Popular />
        <Cuisines />
        <RandomRecipes />
    </>)
};

export default Home;
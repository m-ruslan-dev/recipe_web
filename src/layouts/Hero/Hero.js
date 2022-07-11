import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";

let Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="hero__text">
                <h1>Website Title</h1>
                <p>cooking with passion</p>
                <h3>Delicious recipes every day</h3>
            </div>
            <Searchbar />
            <p className="hero__quotes">Lorem ipsum dolor sit amet.</p>
        </section>
    )
}

export default Hero;
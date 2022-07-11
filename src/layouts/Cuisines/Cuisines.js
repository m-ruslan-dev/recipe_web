import React from "react";
import CategoryLink from "../../components/CategoryLink/CategoryLink";

import french from "../../img/cuisine/french.jpg";
import italian from "../../img/cuisine/italian.jpg";
import greek from "../../img/cuisine/greek.jpg";
import japanese from "../../img/cuisine/japanese.jpg"

function Cuisines() {
    let cuisinesLinks = [
            { 
            cuisine: "French",
            img: french
        }, {
            cuisine: "Italian",
            img: italian
        },  {
            cuisine: "Greek",
            img: greek
        }, {
            cuisine: "Japanese",
            img: japanese
        },
    ]

    return (
        <section className="cuisines container" id="cuisines">
            <h2 className="section-heading">Cuisines</h2>
            <div className="cuisines__holder">
                {cuisinesLinks.map((link, i) => {
                    return <CategoryLink category={link.cuisine} img={link.img} key={i} />
                })}
            </div>
        </section>
    )
}

export default Cuisines;
import React from "react";
import CategoryLink from "../../components/CategoryLink/CategoryLink";

import dessert from "../../img/categories/dessert.jpg";
import chicken from "../../img/categories/chicken.jpg";
import breakfast from "../../img/categories/breakfast.jpg";
import vegetarian from "../../img/categories/vegetarian.jpg";

let Categories = () => {
  let links = [
    {
      category: "Dessert",
      img: dessert,
    },
    {
      category: "Chicken",
      img: chicken,
    },
    {
      category: "Breakfast",
      img: breakfast,
    },
    {
      category: "Vegetarian",
      img: vegetarian,
    },
  ];

  return (
    <section className="categories container">
      <h1 className="section-heading">Categories</h1>

      <div className="categories__holder">
        {links.map((link, i) => {
          let filterParam = `c=${link.category}`;
          return (
            <CategoryLink
              parameter={filterParam}
              category={link.category}
              img={link.img}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

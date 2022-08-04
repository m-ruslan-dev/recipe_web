import React from "react";
import { useState, useEffect } from "react";

const getVideoId = (videoUrl) => {
  let videoId = videoUrl.split("?v=")[1];
  return videoId;
};

const RecipeVideo = ({ url }) => {
  const [error, setError] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");

  useEffect(async () => {
    let response = await fetch(url);
    if (response.status != 200) {
      setError(true);
      throw new Error("could not fetch video");
    }
    let data = await response.json();

    let recipe = data.meals[0];
    let recipeTitle = recipe.strMeal;
    let videoId = getVideoId(recipe.strYoutube);
    setTitle(recipeTitle);
    setVideoId(videoId);
  }, []);

  if (error) {
    return (
      <h2>
        Error <br /> could not fetch video
      </h2>
    );
  } else {
    return (
      <section className="recipeVideo container">
        <h2 className="recipeVideo__title">{title} Video</h2>
        <iframe
          className="recipeVideo__video"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    );
  }
};

export default RecipeVideo;

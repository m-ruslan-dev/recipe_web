import React from 'react';
import { useState, useEffect } from 'react';

const getVideoId = (videoUrl) => {
    let videoId = videoUrl.split("?v=")[1];
    return videoId;
}

const RecipeVideo = ({url}) => {
    const [videoId, setVideoId] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let meals = data.meals;
            let recipeTitle = meals[0].strMeal;
            let videoUrl = meals[0].strYoutube;
            setTitle(recipeTitle);
            let newVideoId = getVideoId(videoUrl);
            setVideoId(newVideoId); 
        })
    }, [])
 

    return (
        <section className='recipeVideo container--recipe'>
            <h2 className='recipeVideo__title'>{title} Video</h2>
            <iframe 
                className='recipeVideo__video' 
                width="853" height="480" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
        </section>
    );
}
 
export default RecipeVideo;
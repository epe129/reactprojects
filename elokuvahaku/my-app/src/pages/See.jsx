import React, { useState, useEffect, Component } from "react";
import MovieCard from './MovieCard';

const API_URL = import.meta.env.VITE_API_URL

function See () {
    const [movies, setMovies] = useState([]);
    const [userData, setUserData] = useState("");

    const randomSearchTerms = [
        "love", "war", "man", "woman", "dark",
        "life", "death", "hero", "night", "day"
    ];
    
    const randomTerm = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search);
    }
        
    useEffect(() => {
        searchMovies(randomTerm);
    }, []);
    
    useEffect(() => {
        fetch('/api/get')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);
    
    console.log(userData)
    
    return(
        <>
        <div style={{ textAlign: "center" }}>
            <h1>See random movies and series</h1>
            {
            movies?.length > 0 ?
            (<div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                    ))}
                    </div>) :
                    (
                    <div className='empty'>
                        <h2>No movies Found</h2></div>
                        )
                        }
        </div> 
        </>  
    )
}
export default See
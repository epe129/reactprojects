import React, { useState, useEffect } from "react";
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7c1746c'


function Home () {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    
    // useEffect(() => {
    //     searchMovies("cop");
    // }, []);

    const handleSubmit = event => {
        event.preventDefault();
        
        console.log(searchTerm)
        searchMovies(searchTerm);

        fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: "example" }),
        });
    };


    useEffect(() => {
        fetch('/api/get')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    console.log(userData)

    
    return(
        <>
        <div style={{ textAlign: "center" }}>
            <h1>Search movies and series</h1>
            
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='search for Movies' value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>

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

export default Home
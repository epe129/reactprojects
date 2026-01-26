import React, { useState, useEffect } from "react";
import MovieCard from './MovieCard';

const API_URL = import.meta.env.VITE_API_URL

export default function Home () {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        searchMovies(searchTerm);

        fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: `${searchTerm}` }),
        });
    };
    
    useEffect(() => {
        fetch('/api/post')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);
    
    const colorItems = [];
    for (const x in userData["titles"]) {
        colorItems.push(
            <div key={x}
                style={{
                    padding: '10px', margin: '5px',
                    borderRadius: '2px', width: '100px'
                }}>
                {userData["titles"][x]}
            </div>
        );
    }

    return(
        <>
        <br/>
        <div style={{ display: "flex", flexDirection: "row", gap:"100px", margin: "0", width: "100%", alignItems: "center", justifyContent: "center", height: "100%"}}>
            <div style={{ color:"white", height: "0", top: "0" }}>
                <h2 style={{ textAlign: "left"}}>haetuimmat sarjat/elokuvat</h2>
                <div>{colorItems}</div>
            </div>

            <div style={{ textAlign: "center", height: "0", top: "0" }}>
                <h1 style={{ color: "white"}}>Search movies and series</h1>
                
                <div>
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
                            <h2 style={{ color: "white"}}>No movies Found</h2></div>
                            )
                            }
            </div>
        </div>
         
        </>  
    )
}
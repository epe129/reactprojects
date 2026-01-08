import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p style={{ color: "white"}}>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span style={{ color: "white"}}>{movie.Type}</span>
                <h3 style={{ color: "white"}}>{movie.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard
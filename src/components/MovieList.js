import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => 
            <div className='movie-card image-container' key={movie.imdbID}>
                <img className='movie-poster' src={movie.Poster} alt='movie'></img>
                <p className='movie-title'>{movie.Title}</p>
                <p className='movie-title'>Released: {movie.Year}</p>
            </div>
        )}
    </>
  )
}

export default MovieList
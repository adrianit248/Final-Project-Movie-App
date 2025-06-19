import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => 
            <div className='movie-card' key={movie.imdbID}>
                <img className='movie-poster' src={movie.Poster} alt='movie'></img>
                <p className='movie-title'>{movie.Title}</p>
            </div>
        )}
    </>
  )
}

export default MovieList
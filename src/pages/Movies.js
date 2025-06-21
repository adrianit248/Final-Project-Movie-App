import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Movies = (props) => {

//  initialize searchMovie to an empty object, so that it can later
//  be assigned the object value of the corresponding movie and all
//  of its components
    const [searchMovie, setSearchMovie] = useState({})

//  initialize navigate() for use with the back button
    let navigate = useNavigate()

//  on mount, useEffect will call getMovie()
    useEffect(() => {
        console.log(props.imdbID)
        setTimeout(() => {
            getMovie(props.imdbID)    
        }, 1000);
    }, [])

//  (Receiving the ID as a passed prop from useEffect on mount- and 
//  which is tied to a passed value from the Home page onClick)
//
//  Searches the API for the specific movie ID, collects the object 
//  and component values for said ID, and then assigns it all as an 
//  update to the searchMovie object variable
    async function getMovie (imdbID) {
        const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=a7004db5`
        const response = await axios.get(url)

        setSearchMovie(response)
    }

    return (
        <>
            <div className="idmovie-container">
                <div className="idmovie-row">
                    <div className='idmovie-display'>
                        <img className='idmovie-poster' src={searchMovie.Poster} alt='movie'></img>
                        <p className='idmovie-title'>{searchMovie.Title}</p>
                        <p className='idmovie-rated'>Rating: {searchMovie.Rated}</p>
                        <p className='idmovie-released'>Released: {searchMovie.Released}</p>
                        <p className='idmovie-runtime'>Runtime: {searchMovie.Runtime}</p>
                        <p className='idmovie-genre'>Genre: {searchMovie.Genre}</p>
                        <p className='idmovie-director'>Director: {searchMovie.Director}</p>
                        <p className='idmovie-writer'>Writer: {searchMovie.Writer}</p>
                        <p className='idmovie-actors'>Actors: {searchMovie.Actors}</p>
                        <p className='idmovie-plot'>Plot: {searchMovie.Plot}</p>
                        <p className='idmovie-language'>Language: {searchMovie.Language}</p>
                        <p className='idmovie-country'>Country: {searchMovie.Country}</p>
                        <p className='idmovie-awards'>Awards: {searchMovie.Awards}</p>
                        <p className='idmovie-metascore'>Metascore: {searchMovie.Metascore}</p>
                        <p className='idmovie-boxoffice'>Box Office: {searchMovie.BoxOffice}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Movies;

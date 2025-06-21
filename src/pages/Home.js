import { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import MovieListHeading from '../components/MovieListHeading';
import Searchbox from '../components/Searchbox';
import { useNavigate, useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import loading_gif from '../loading_gif.gif'


function Home(props, idVal, setIdVal) {
let navigate = useNavigate();
const { id } = useParams();
const [loading, setLoading] = useState(false)
  
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('cat')

//  filters movies based on an onChange event in the corresponding select element
  function filterMovies(filter) {

        if (filter === "OLDEST_TO_NEWEST") {
            setMovies(movies.slice().sort((a, b) => (a.Year) - (b.Year)))
        }
        if (filter === "NEWEST_TO_OLDEST") {
            setMovies(movies.slice().sort((a, b) => (b.Year) - (a.Year)))
        }

        renderMovies(movies)

    }

//  renders movies either on a triggered change to the search value or by clicking on a filter value
    function renderMovies()  {
        return (
            <>
                {loading
                ?   <div className="loading-spinner-container">
                        <div className='loading-spinner'><img src={loading_gif} alt="" /></div>
                    </div>
                :   <>
                        {movies.map((movie) => 
                            <div className='movie-card image-container' key={movie.imdbID}
                            onClick={() => {navigate(`/${movie.imdbID}`)}}
                            >
                                <img className='movie-poster' src={movie.Poster} alt='movie'></img>
                                <p className='movie-title'>{movie.Title}</p>
                                <p className='movie-title'>Released: {movie.Year}</p>
                            </div>
                        )}
                    </>
                
                }
            </>
        )
    }

//  whenever the search value is changed / you click the Magnifying Glass or hit ENTER it will parse the new search
//  after the search is parsed with your new search critera, the new search result array is passed on to be rendered
    const getMovieRequest = async (searchValue) => {

        setLoading(true)

        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a7004db5`

        const response = await axios.get(url)

        const responseArray = (response.data.Search).slice(0,6)

        setTimeout(() => {
            {response.data.Search ? setMovies(responseArray) : <></>}  
        }, 1000);

        setLoading(false)

        renderMovies(movies)
        
    }


//  any time the search value is changed (by initiating a search) getMovieRequest parses th search and returns results
    useEffect(() => {
        setTimeout(() => {
            getMovieRequest(searchValue)
        }, 1000);
    }, [searchValue])


//  The HTML elements / visual representation
    return (
        <div className="movie-container">
        
{/* The header section at the top of the page */}

            <div className='header-bar'>
                <MovieListHeading heading={'Movies'} />
                <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} /> 
            </div>

{/* The search filter below the header / above the movie search results */}

            <div className="filter-container"> 
                <select defaultValue={'Sort By:'} className="sortFilter" 
                onChange={(event) => filterMovies(event.target.value)}
                >
                    <option disabled>Sort By:</option>
                    <option value="OLDEST_TO_NEWEST" >
                        Oldest to Newest
                    </option>
                    <option value="NEWEST_TO_OLDEST" >
                        Newest to Oldest
                    </option>
                </select>  
            </div>

{/* The movie row div is used to style / structure the layout of the movie results */}

{/* The bracketed section encompasses all of what is displayed in the movie search results
    and its dynamic expression is dependent on output from the renderMovies() function call */}
            <div className='movie-row'>
                {renderMovies()}
            </div>
        </div>
    );
}

export default Home;


// stopped at minute 21:47 of https://www.youtube.com/watch?v=jc9_Bqzy2YQ
// finished needed sections of Youtube video
// next, complete the following revisions:
// for the search results, splice the resulting array into a max of 6 movies
// add "sort" filters for oldest to newest, and newest to oldest
// when you click on the movie, direct to a dedicated page for that movie's info- add a back button
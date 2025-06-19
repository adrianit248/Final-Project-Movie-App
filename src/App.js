import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import MovieListHeading from './components/MovieListHeading';
import Searchbox from './components/Searchbox';

function App() {
  
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a7004db5`

    const response = await axios.get(url)

    {response.data.Search ? setMovies(response.data.Search) : <></>}
    
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="movie-container">

      <div className='row header-bar'>
        <MovieListHeading heading={'Movies'} />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} /> 
      </div>

      <div className='movie-row'>
        {/* adding an instance of MovieList below, and passing the props of "movies" into it to be rendered */}
        <MovieList movies={movies} /> 
      </div>
    </div>
  );
}

export default App;

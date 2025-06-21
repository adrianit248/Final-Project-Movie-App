import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Movies from './pages/Movies'
import { useState } from "react";

function App(props) {

  const [idVal, setIdVal] = useState('')

  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home idVal={idVal} setIdVal={setIdVal} />}></Route>
        <Route path=':id' element={<Movies idVal={idVal} setIdVal={setIdVal} />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;





// import { useEffect, useState } from 'react';
// import './App.css';
// import MovieList from './components/MovieList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'
// import MovieListHeading from './components/MovieListHeading';
// import Searchbox from './components/Searchbox';
// import SortFilter from './components/SortFilter'

// function App() {
  
//   const [movies, setMovies] = useState([])
//   const [searchValue, setSearchValue] = useState('')


//   const getMovieRequest = async (searchValue) => {
//     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a7004db5`

//     try{
//       const response = await axios.get(url)
//       const responseArray = (response.data.Search).slice(0,6)
  
//       {response.data.Search ? setMovies(responseArray) : <></>}
//     }
//     catch (error){
//       alert('Please enter text and then search')
//     }
    
//   }

//   useEffect(() => {
//     getMovieRequest(searchValue)
//   }, [searchValue])

//   return (
//     <div className="movie-container">

//       <div className='header-bar'>
//         <MovieListHeading heading={'Movies'} />
//         <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} /> 
//       </div>

//       <SortFilter className='sort-filter' searchValue={searchValue} setSearchValue={setSearchValue} />

//       <div className='movie-row'>
//         {/* adding an instance of MovieList below, and passing the props of "movies" into it to be rendered */}
//         <MovieList className='movies-section' movies={movies} /> 
//       </div>
//     </div>
//   );
// }

// export default App;


// // stopped at minute 21:47 of https://www.youtube.com/watch?v=jc9_Bqzy2YQ
// // finished needed sections of Youtube video
// // next, complete the following revisions:
// // for the search results, splice the resulting array into a max of 6 movies
// // add "sort" filters for oldest to newest, and newest to oldest
// // when you click on the movie, direct to a dedicated page for that movie's info- add a back button
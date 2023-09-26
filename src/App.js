import { useEffect, useState } from 'react';

// 7ba95e5b

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com?apikey=7ba95e5b'; //static variable

const movie1 = {
    "Title": "Miles Morales Ultimate Spiderman",
    "Year": "2021",
    "imdbID": "tt14311386",
    "Type": "movie",
    "Poster": "N/A"
}

 const App = () => {
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async(title) =>{ //async, because it takes time to fetch the movies
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); // it is a data object

        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>FindMovies</h1>

            <div className="search">
                <input
                   placeholder = "Search for movies"
                   value = "dummy_value" 
                />
                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick = {() => {}}
                />
            </div>

            {
                movies.length >0 ? (
                    <div className='container'>
                        {movies.map
                        }
                        <MovieCard movie1={movies}/>
                    </div>
                ) : (
                    <h2>No Movies Found</h2>
                )
            }

            
        </div>
    );
 }

 export default App;
 
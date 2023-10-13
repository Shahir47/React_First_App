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
        const response = await fetch(`${API_URL}&s=${title}`); //& is used to seperate parameters in url, maybe 's' is a parameter
        const data = await response.json(); // This response object contains json data. .json() returns that json data as JS object.
                            // We are also using "await" here because it takes time to parse the JSON data in the response object.

        setMovies(data.Search); // This is a property of the JS object (which we got from the json data). It returns the search result requested using fetch.
                                // search in the browser: https://www.omdbapi.com/?apikey=7ba95e5b&s=Spiderman
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Movies</h1>

            <div className="search">
                <input
                   placeholder = "Search for movies"
                   value = "dummy_value" 
                   onChange={()=>{}} 
                />
                {/* In react <input> requires value parameter, but this is static. So, we used "onChange" to make it dynamic*/}
                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick = {() => {}}
                />
            </div>

            {/* {
                movies.length >0 ? (
                    <div className='container'>
                        {movies.map
                        }
                        <MovieCard movie1={movies}/>
                    </div>
                ) : (
                    <h2>No Movies Found</h2>
                )
            } */}

            <div className="container">
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.poster : "https://via.placeholder.com/400"} alt = {movie1.Title} />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
 }

 export default App;
 
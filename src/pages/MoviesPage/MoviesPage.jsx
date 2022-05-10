import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { SearchForm } from "components/SearchForm/SearchForm.jsx";
import * as api from "services/themoviedb-api.js";



export const MoviesPage = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [, setSearchParams] = useSearchParams();
    const location = useLocation();

    
    useEffect(() => {
        if (searchQuery === '') {
            return;
        }

        api.fetchSearchMovies(searchQuery)
            .then(response => {
                setMovies(response.results);
            });
    }, [searchQuery]);


    const onFormSubmit = (value) => {
        setSearchQuery(value);
        setMovies([]);
        setSearchParams({ query: value });
    }

    return (
        <>
            <SearchForm onSubmit={onFormSubmit} />
            
                <ul>
                    {movies && movies.map(movie => 
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                        </li>
               )}
            </ul>
            
        </>
        
        
    )
}


import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { SearchForm } from "components/SearchForm/SearchForm.jsx";
import * as API from "services/themoviedb-api.js";



export default function MoviesPage() {
 
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const currentSearchParams = searchParams.get('query');
    
    
    useEffect(() => {
        if (searchQuery === '') {
            return;
        }

        API.fetchSearchMovies(searchQuery)
            .then(response => {
                if (!response.results.length) {
                    toast.error(`No information about "${searchQuery}"`)
                }
                setMovies(response.results)
            });
    }, [searchQuery]);


    useEffect(() => {
    if (currentSearchParams) {
      setSearchQuery(currentSearchParams);
    }
    }, [currentSearchParams]);
    

    const onFormSubmit = (value) => {
        setSearchQuery(value);
        setMovies([]);
        setSearchParams({ query: value });
    };


    return (
        <>
            <SearchForm onSubmit={onFormSubmit} />
            <ul>
                {movies && movies.map(movie =>
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                    </li>
                )}
            </ul>
            
        </>
    )
}


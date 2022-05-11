import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as api from "services/themoviedb-api.js";

export default function HomePage() {

    const [movies, setMovies] = useState(null);
    const location = useLocation();
    


    useEffect(() => {
        api.fetchTrendingMovies()
            .then(response => setMovies(response.results))
            .catch(error => {
                console.log(error);
            })
    }, []);


    return (
        <>
            <h2>Trending today</h2>
            <ul>
                { movies && movies.map(movie =>
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                        </li>)}
            </ul>
        </>
    )
}
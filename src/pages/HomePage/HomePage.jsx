import { useState, useEffect } from "react";

import { MoviesList } from "components/MoviesList/MoviesList.jsx";
import * as api from "services/themoviedb-api.js";

export default function HomePage() {

    const [movies, setMovies] = useState(null);


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
            <MoviesList movies={movies}/>
        </>
    )
}
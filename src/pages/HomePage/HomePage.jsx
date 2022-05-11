import { useState, useEffect } from "react";

import { MoviesList } from "components/MoviesList/MoviesList.jsx";
import s from "./HomePage.module.css";
import * as api from "services/themoviedb-api.js";

export default function HomePage() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        api.fetchTrendingMovies()
            .then(response => setMovies(response.results))
            .catch(error => {
                console.log(error);
            })
    }, []);


    return (
        <>
            <h2 className={s.title}>Trending today</h2>
            <MoviesList movies={movies} />
        </>
    );
}
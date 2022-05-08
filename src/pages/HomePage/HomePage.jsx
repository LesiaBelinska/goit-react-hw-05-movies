import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import * as theMoviedbApi from "services/themoviedb-api.js";

export const HomePage = () => {

    //const { url } = useRouteMatch();
    const [movies, setMovies] = useState(null);
    


    useEffect(() => {
        theMoviedbApi.fetchTrendingMovies()
            .then(request => setMovies(request.results))
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <h2>Trending today</h2>
            <ul>
                { movies && movies.map(movie =>
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>)}
            </ul>
        </>
    )
}
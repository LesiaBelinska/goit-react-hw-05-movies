import { useState, useEffect } from "react";

import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { BackLink } from "components/BackLink/BackLink.jsx";
import * as api from "services/themoviedb-api.js";




export default function MovieDetailsPage() {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() => {
        api.fetchMovieDetails(movieId).then(setMovie);
    }, [movieId])

    const onGoBack = () => navigate(location?.state?.from ?? "/");
    
    return (
        <>
            <BackLink onClick={onGoBack} label="Go back"/>
            {movie &&
                <>
                <img
                    src={api.POSTER_URL + movie.poster_path}
                    alt={movie.title}
                    width="300"
                    height="450"
                />
                <h2>{movie.title}</h2>
                <p>User Score: <span>{movie.vote_average}</span></p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                {movie.genres && (
                    <>
                        <p>Genres</p>
                        <ul>
                            {movie.genres.map((genre, index) =>
                                <li key={index}>{genre.name}</li>)}
                        </ul>
                    </>
                )}
                <p>Additional information</p>
                <nav>
                    <NavLink to={'cast'}>Cast</NavLink>
                    <NavLink to={'reviews'}>Reviews</NavLink>
                </nav>
            </>
                
            
            }
            <Outlet/>
        </>
    )
}

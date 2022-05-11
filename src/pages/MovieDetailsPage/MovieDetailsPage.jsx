import { useState, useEffect } from "react";

import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { BackLink } from "components/BackLink/BackLink.jsx";
import s from "./MovieDetailsPage.module.css";
import * as API from "services/themoviedb-api.js";


export default function MovieDetailsPage() {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() => {
        API.fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    const onGoBack = () => navigate(location?.state?.from ?? "/");
    
    return (
        <>
            <BackLink onClick={onGoBack} label="Go back" />
            {movie &&
                <>
                    <div className={s.wrapper}>
                        <img
                            src={API.POSTER_URL + movie.poster_path}
                            alt={movie.title}
                            width="300"
                            height="450"
                        />
                        <div className={s.rightPart}>
                            <h2 className={s.nameTitle}>{movie.title}</h2>
                            <p className={s.text}>User Score: <span>{movie.vote_average}</span></p>
                            <h3 className={s.title}>Overview</h3>
                            <p className={s.text}>{movie.overview}</p>
                            {movie.genres && (
                                <div>
                                    <h3 className={s.title}>Genres</h3>
                                    <ul className={s.ganre}>
                                        {movie.genres.map((genre, index) =>
                                            <li key={index}
                                                className={s.ganreItem}>
                                                {genre.name}
                                            </li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={s.bottomPart}>
                        <p className={s.text}>Additional information</p>
                        <nav className={s.nav}>
                            <ul>
                                <li className={s.item}>
                                    <NavLink
                                        to={'cast'}
                                        state={location.state}
                                        className={s.navLink}>
                                        Cast</NavLink></li>
                                <li className={s.item}>
                                    <NavLink
                                        to={'reviews'}
                                        state={location.state}
                                        className={s.navLink}>
                                        Reviews</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </>
                
            
            }
            <Outlet />
        </>
    )
}

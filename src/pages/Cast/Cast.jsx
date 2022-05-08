import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as theMoviedbapi from "services/themoviedb-api.js";

export const Cast = () => {

    const [casts, setCasts] = useState(null);
    const { movieId } = useParams();
    
    useEffect(() => {
        theMoviedbapi.fetchMovieCast(movieId).then(request=>setCasts(request.cast));
    },[movieId])
    

    return (
        <>
            {casts && <>{casts.map((cast) => <li key={cast.id}>
                <img
                    src={theMoviedbapi.POSTER_URL + cast.profile_path}
                    alt={cast.name}
                    width="100"
                    height="150"
                />
                <p>{cast.name}</p>
            </li>)}</>
            }
        </>
    )
}
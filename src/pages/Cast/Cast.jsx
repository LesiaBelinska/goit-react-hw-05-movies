import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as api from "services/themoviedb-api.js";

export default function Cast() {

    const [casts, setCasts] = useState(null);
    const { movieId } = useParams();
    
    useEffect(() => {
        api.fetchMovieCast(movieId).then(request=>setCasts(request.cast));
    },[movieId])
    

    return (
        <>
            {casts && <>{casts.map((cast) => <li key={cast.id}>
                <img
                    src={api.POSTER_URL + cast.profile_path}
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
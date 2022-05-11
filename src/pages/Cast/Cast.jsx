import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import s from "./Cast.module.css"

import * as API from "services/themoviedb-api.js";

export default function Cast() {

    const [casts, setCasts] = useState(null);
    const { movieId } = useParams();
    
    useEffect(() => {
        API.fetchMovieCast(movieId).then(request=>setCasts(request.cast));
    },[movieId])
    

    return (
        <>
            {casts && 
                <ul className={s.list}>
                    {casts.map((cast) => 
                 <li key={cast.id}
                    className={s.item}>
                {cast.profile_path ?
                    <img
                        src={API.POSTER_URL + cast.profile_path}
                        alt={cast.name}
                        width="100"
                                height="150"
                                className={s.image}
                    /> : <BiUser
                        className={s.icon} />}
                <p className={s.name}>{cast.name}</p>
            </li>
            )}
                </ul>
            }
        </>
    )
}
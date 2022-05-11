import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./Reviews.module.css";
import * as API from "services/themoviedb-api.js";


export default function Reviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        API.fetchMovieReviews(movieId)
            .then(response=>setReviews(response.results))
    }, [movieId]);

    return (
        <>
            {reviews.length > 0 ?
                <ul className={s.list}>
                    {reviews.map(review =>
                        <li key={review.id} className={s.item}>
                            <p className={s.name}>Author: <span>{review.author}</span></p>
                            <p className={s.text}>{review.content}</p>
                        </li>
                    )}
                </ul>
                : <p className={s.notification}>We don't have any reviews for this movie.</p>
            }
        </>
    );
}

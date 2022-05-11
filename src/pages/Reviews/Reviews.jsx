import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
                <ul>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <p>Author: <span>{review.author}</span></p>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ul>
                : <p>We don't have any reviews for this movie.</p>
            }
        </>
    );
};

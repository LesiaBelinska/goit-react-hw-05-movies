import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as theMoviedbapi from "services/themoviedb-api.js";


export const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        theMoviedbapi.fetchMovieReviews(movieId)
            .then(request=>setReviews(request.results))
    }, [movieId]);

    return (
        <>
            {reviews && 
                reviews.map(review => <li key={review.id}>
                    <p>Author: <span>{review.author}</span></p>
                    <p>{review.content}</p>
                </li>)
            }
        </>
    )
}
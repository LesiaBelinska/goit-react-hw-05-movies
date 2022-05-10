const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1a4768bd62313a9ba272b58353515c76';

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';


export function fetchTrendingMovies() {
    return fetch(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    )
        .then(response => response.json());
};

export function fetchSearchMovies(query) {
    return fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
        .then(response => response.json());
};

export function fetchMovieDetails(movieId) {
    return fetch(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
        .then(response => response.json());
};

export function fetchMovieCast(movieId) {
    return fetch(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
        .then(response => response.json());
};

export function fetchMovieReviews(movieId) {
    return fetch(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
        .then(response => response.json());
};
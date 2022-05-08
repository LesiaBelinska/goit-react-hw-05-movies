const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1a4768bd62313a9ba272b58353515c76';

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
};

export function fetchTrendingMovies() {
    return fetchWithErrorHandling(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export function fetchSearchMovies(query) {
    return fetchWithErrorHandling(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
};

export function fetchMovieDetails(movieId) {
    return fetchWithErrorHandling(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
};

export function fetchMovieCast(movieId) {
    return fetchWithErrorHandling(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
};

export function fetchMovieReviews(movieId) {
    return fetchWithErrorHandling(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
};
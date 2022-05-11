import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

export const MoviesList = ({ movies }) => {
    
    const location = useLocation();
    
    return (
        <ul className={s.list}>
            {movies && movies.map(movie =>
                <li key={movie.id}
                    className={s.item}>
                    <Link
                        to={`/movies/${movie.id}`}
                        state={{ from: location }}
                        className={s.link}>
                        {movie.title}
                    </Link>
                </li>
            )}
        </ul>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
        }),
    ).isRequired,
};
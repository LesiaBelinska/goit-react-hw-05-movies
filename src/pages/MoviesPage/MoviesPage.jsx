// import { useState, useEffect } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";
import { SearchForm } from "components/SearchForm/SearchForm.jsx";
//import * as theMoviedbapi from "services/themoviedb-api.js";

export const MoviesPage = () => {

    const onFormSubmit = () => {
       
   }


    return (
        <>
            <SearchForm onSubmit={onFormSubmit} />
            {/* {movies && 
                <div></div>
            } */}
        </>
        
        
    )
}

//  const location = useLocation();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [urlQuery, setUrlQuery] = useSearchParams();
//     const currentSearchParam = urlQuery.get('query');


//     useEffect(() => {
//         setUrlQuery({query: searchQuery})
//         theMoviedbapi.fetchSearchMovies(searchQuery)
//             .then(response=> setMovies(response.results))
           
//     }, [searchQuery, setUrlQuery]
//     )

//     useEffect(() => {
//         if (currentSearchParam) {
//             setSearchQuery(currentSearchParam);
//         }
//     }, [currentSearchParam]);

//     const onFormSubmit = query => {
//         setSearchQuery(query);
//         setMovies([]);
//     }
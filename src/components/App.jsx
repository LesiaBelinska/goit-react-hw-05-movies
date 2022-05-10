import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout.jsx";
import { Loader } from "./loader/Loader.jsx";

// import { HomePage } from "pages/HomePage/HomePage.jsx";
// import { MoviesPage } from "pages/MoviesPage/MoviesPage.jsx";
// import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage.jsx";
// import { Cast } from "pages/Cast/Cast.jsx";
// import { Reviews } from "pages/Reviews/Reviews.jsx";
// import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage.jsx";

const HomePage = lazy(() =>
  import("pages/HomePage/HomePage.jsx"));

const MoviesPage = lazy(() =>
  import("pages/MoviesPage/MoviesPage.jsx"));

const MovieDetailsPage = lazy(() =>
  import("pages/MovieDetailsPage/MovieDetailsPage.jsx"));

const Cast = lazy(() =>
  import("pages/Cast/Cast.jsx"));

const Reviews = lazy(() =>
  import("pages/Reviews/Reviews.jsx"));

const NotFoundPage = lazy(() =>
  import("pages/NotFoundPage/NotFoundPage.jsx"));


export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" exact element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </Suspense>

    
  );
};

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';

const LazyHome = lazy(() => import('views/Home/Home'));
const LazyMovies = lazy(() => import('views/Movies/Movies'));
const LazyMovieDetails = lazy(() => import('views/MovieDetails/MovieDetails'));
const LazyCast = lazy(() => import('views/Cast/Cast'));
const LazyReviews = lazy(() => import('views/Reviews/Reviews'));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

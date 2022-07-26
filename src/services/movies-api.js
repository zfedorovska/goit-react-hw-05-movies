const BASE_URL = 'https://api.themoviedb.org/3';
const API = 'bd5e1631ed489de1dc8ff7eb8202de51';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API}`
  ).then(response => response.results);
}

export function fetchMovieById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${API}&language=en-US`
  );
}

export function fetchCreditsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API}&language=en-US`
  ).then(response => response.cast);
}

export function fetchReviewsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API}&language=en-US&page=1`
  ).then(response => response.results);
}

export function fetchMoviesBySearchQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API}&query=${query}&language=en-US&page=1`
  ).then(response => response.results);
}

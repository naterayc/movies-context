const base_url = "https://api.themoviedb.org/3/";
const api_key = "23d25b84f4ea14d15ab39a781eb0d858"
const base_url_images= "https://image.tmdb.org/t/p/";

export const nowPlayingMoviesGet = () => `${base_url}movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
export const popularMoviesGet = () => `${base_url}movie/popular?api_key=${api_key}&language=en-US&page=1`;
export const movieDetailsGet = (movie_id) => `${base_url}movie/${movie_id}?api_key=${api_key}&language=en-US`;
export const similarMoviesGet = (movie_id) => `${base_url}movie/${movie_id}/similar?api_key=${api_key}&language=en-US&page=1`;
export const searchMoviesGet = (query) => `${base_url}search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
export const smallImage = (file_path) => `${base_url_images}w300/${file_path}`;
export const originalImage = (file_path) => `${base_url_images}original/${file_path}`;

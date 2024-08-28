import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie/";
const api_key = "c830bcff8dcc274ff002c7030f2a74dc";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c830bcff8dcc274ff002c7030f2a74dc";

const getPopularMovies = axios.get(`${movieBaseURL}popular?api_key=${api_key}`);
const getMovieByGenreId = (id: number) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default { getPopularMovies, getMovieByGenreId };

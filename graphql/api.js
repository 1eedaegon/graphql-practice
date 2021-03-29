import fetch from "node-fetch";
const BASE = "https://yts.mx/api/v2";
const MOVIES = `${BASE}/list_movies.json`;
const DETAIL = `${BASE}/movie_details.json`;
const SUGGESTIONS = `${BASE}/movie_suggestions.json`;
const LOG = console.log;

export const getMovies = async (limit = 20, minimum_rating = 0) => {
  const params = `${MOVIES}?${new URLSearchParams({ limit, minimum_rating })}`;
  const {
    data: { movies },
  } = await fetch(params).then((res) => res.json());
  return movies;
};
export const getMovieDetail = async (id) => {
  const params = `${DETAIL}?${new URLSearchParams({ movie_id: id })}`;
  const {
    data: { movie },
  } = await fetch(params).then((res) => res.json());
  return movie;
};
export const getMovieSuggestion = (id) => {};
// getMovies(10).then((res) => LOG(res));

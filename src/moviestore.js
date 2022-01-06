import { writable } from 'svelte/store';

const api_key = import.meta.env.VITE_TMDB_API_KEY

export const movies = writable([]);
const moviesDetails = {};

export const upcomingMovies = writable([]);
const upcomingMoviesDetails = {};

let loaded = false;

export let loggedIn = false;


export const fetchMovies = async () => {
	if (loaded) return;
	const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pl`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const loadedMovies = data.results.map((data) => ({
		title: data.title,
		id: data.id,
		poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`,
		vote_average: data.vote_average,
		overview: data.overview,
		release_date: data.release_date,
		vote_count: data.vote_count
	}));
	movies.set(loadedMovies);
	loaded = true;
};
export const getMovieById = async (id) => {
	if (moviesDetails[id]) return moviesDetails[id];

	try {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pl`;
		const res = await fetch(url);
		const data = await res.json();
		moviesDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const fetchUpgomingMovies = async () => {
	if (loaded) return;
	const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=pl`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const loadedUpcomingMovies = data.results.map((data) => ({
		title: data.title,
		id: data.id,
		poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`,
		vote_average: data.vote_average,
		overview: data.overview,
		release_date: data.release_date,
		vote_count: data.vote_count
	}));
	upcomingMovies.set(loadedUpcomingMovies);
};
import { writable } from 'svelte/store';

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const topMovies = writable([]);

export let loaded = false;

export const fetchTopMovies = async () => {
	if (loaded) return;
	const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pl`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedMovies = data.results.map((data) => ({
		title: data.title,
		id: data.id,
		poster_path: data.poster_path,
		vote_average: data.vote_average,
		overview: data.overview,
		release_date: data.release_date,
		vote_count: data.vote_count
	}));
	topMovies.set(loadedMovies);
	loaded = true;
	console.log(loaded);
};

import { writable } from 'svelte/store';

const api_key = import.meta.env.VITE_TMDB_API_KEY

export const findMovies = writable([]);

export let loaded = false;



export const fetchFindMovies = async (lookingPhrase) => {
	if (loaded) return;
	const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pl&query=${lookingPhrase}`;
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
	findMovies.set(loadedMovies);
	loaded = true;
};

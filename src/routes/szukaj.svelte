<script>
	import MovieCard from '../components/MovieCard.svelte';
	const api_key = import.meta.env.VITE_TMDB_API_KEY;

	let searchTerm = '';
	let foundMovies = handleSearch();

	async function handleSearch() {
		if (!searchTerm) {
			const res = await await fetch(
				`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pl&query="Spiderman"`
			);
			const data = await res.json();
			foundMovies = data.results;
			return data.results;
		}

		const res = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pl&query=${searchTerm}`
		);
		const data = await res.json();
		console.log(data);
		foundMovies = data.results;
		return foundMovies;
	}
</script>

<svelte:head>
	<title>FilmyWSB - Szukaj</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Wyszukiwarka filmów</h1>
<div class="form-control">
	<label class="label" for="search">
		<span class="label-text">Szukaj filmów:</span>
	</label>
	<div class="">
		<input
			id="search"
			type="text"
			bind:value={searchTerm}
			placeholder="tytuł, nazwisko, wytwórnia etc..."
			class="w-full input input-primary input-bordered mb-2"
		/>
		<button on:click={handleSearch} class="btn btn-primary w-full">Szukaj</button>
	</div>
</div>

<div class="py-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
	{#await foundMovies}
		<p>Szukam filmów powiązanych z '{searchTerm}'</p>
	{:then foundMovies}
		{#each foundMovies as movie}
			<MovieCard {movie} />
		{/each}
	{:catch error}
		<div class="alert alert-error col-span-4">
			<div class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="w-6 h-6 mx-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
					/>
				</svg>
				<h2>Wystąpił błąd: {error}</h2>
			</div>
		</div>
	{/await}
</div>

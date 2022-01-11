<script>
	import { loaded, upcomingMovies, fetchUpgomingMovies } from '../upcomingstore';
	import MovieCard from '../components/MovieCard.svelte';

	fetchUpgomingMovies();
</script>

<svelte:head>
	<title>FilmyWSB - Premiery</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Premiery</h1>
<div class="py-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
	{#if $upcomingMovies}
		{#each $upcomingMovies as movie}
			<MovieCard {movie} />
		{/each}
	{:else}
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
				<h2>Nie znaleziono filmu!</h2>
			</div>
		</div>
	{/if}
</div>

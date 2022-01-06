<script>
	import { fade } from 'svelte/transition';
	export let movie;

	let loggedIn = false;

	function incrementClaps() {
		movie.vote_count += 1;
	}
</script>

<div class="card text-center shadow-2xl py-10" href={`/movie/${movie.id}`} transition:fade>
	<figure class="px-10 pt-10">
		<img class="rounded-xl h-330 w-22" src={movie.poster_path} alt={movie.title} />
	</figure>
	<div class="bg-cyan-500 shadow-lg shadow-cyan-500/50h-20 w-10.">{movie.vote_average} ⭐</div>
	<div class="justify-center card-actions">
		<a href="/film/{movie.id}" class="btn btn-accent btn-active" role="button" aria-pressed="true"
			>O filmie</a
		>
		<button class="btn btn-primary" on:click={incrementClaps}>
			❤
			<div class="badge ml-2 badge-outline">{movie.vote_count}</div>
		</button>
	</div>
</div>

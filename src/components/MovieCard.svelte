<script>
	import { fade } from 'svelte/transition';
	export let movie;

	function incrementClaps() {
		movie.vote_count += 1;
	}
</script>

<div class="card text-center shadow-2xl py-10" href={`/movie/${movie.id}`} transition:fade>
	<figure class="px-10 pt-10">
		<img
			class="rounded-xl h-330 w-22"
			src="https://www.themoviedb.org/t/p/w220_and_h330_face/{movie.poster_path}"
			alt={movie.title}
		/>
	</figure>
	<div
		class="mx-10 my-6 rounded-xl justify-center text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 h-10 pt-1 text-white"
	>
		⭐{movie.vote_average}
	</div>
	<h2 class="card-title">{movie.title}</h2>
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

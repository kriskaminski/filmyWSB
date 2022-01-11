<script>
	export let movie;
	console.log({ movie });
	// @ts-ignore
	let currentMovieGeneres = movie.genres.map((genre) => genre.name);

	function incrementClaps() {
		movie.vote_count += 1;
	}

	function calculateRuntime(runtime) {
		let hours = Math.floor(runtime / 60);
		let minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	}
</script>

<div class="card lg:card-side card-bordered shadow-2xl col-span-1">
	<div class="card-body">
		<h2 class="card-title text-4xl font-bold">
			{movie.title} ({movie.release_date.substring(0, 4)})
			{#each currentMovieGeneres as genre}
				<div class="badge badge-lg badge-accent mx-2">{genre}</div>
			{/each}
		</h2>
		<p class="text-lg">{movie.overview}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-accent" on:click={incrementClaps}>
				❤
				<div class="badge ml-2 badge-outline">{movie.vote_count}</div>
			</button>
		</div>
		<div class="w-full shadow stats border border-base-300">
			<div class="stat shadow-xl">
				<div class="stat-title">Dochód</div>
				<div class="stat-value font-medium">{movie.revenue.toLocaleString('pl-PL')} USD</div>
			</div>
			<div class="stat shadow-xl">
				<div class="stat-figure text-secondary" />
				<div class="stat-title">Budżet</div>
				<div class="stat-value font-medium">{movie.budget.toLocaleString('pl-PL')} USD</div>
			</div>
			<div class="stat shadow-xl">
				<div class="stat-title">Czas</div>
				<div class="stat-value font-medium">{calculateRuntime(movie.runtime)}</div>
			</div>
		</div>
	</div>
	<figure>
		<img
			src="https://www.themoviedb.org/t/p/w220_and_h330_face/{movie.poster_path}"
			alt={movie.title}
		/>
	</figure>
</div>

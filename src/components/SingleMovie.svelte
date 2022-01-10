<script>

	// import { fade } from 'svelte/transition';
	export let movie;
    console.log({movie});
    let currentMovieGeneres = movie.genres.map(genre => genre.name);

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
      <h2 class="card-title">{movie.title} ({movie.release_date.substring(0, 4)})
        {#each currentMovieGeneres as genre }
            <div class="badge badge-lg badge-accent mx-2">{genre}</div>
        {/each}
        </h2>
      <p>{movie.overview}</p> 
      <div class="card-actions justify-end">
		<button class="btn btn-accent" on:click={incrementClaps}>
			❤
			<div class="badge ml-2 badge-outline">{movie.vote_count}</div>
		</button>
      </div>
      <div class="w-full shadow stats border border-base-300">
        <div class="stat shadow-xl">
          <div class="stat-title">Dochód</div> 
          <div class="stat-value">{movie.revenue.toLocaleString("pl-PL")} USD</div> 
        </div> 
        <div class="stat shadow-xl">
          <div class="stat-figure text-secondary">
          </div> 
          <div class="stat-title">Budżet</div> 
          <div class="stat-value">{movie.budget.toLocaleString("pl-PL")} USD</div> 
        </div> 
        <div class="stat shadow-xl">
          <div class="stat-title">Czas</div> 
          <div class="stat-value">{calculateRuntime(movie.runtime)}</div> 
        </div>
      </div>
      
    </div>
    <figure>
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/{movie.poster_path}">
      </figure> 
  </div>

<!-- 

<div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
    <div class="card card-bordered col-span-1 row-span-3 shadow-lg xl:col-span-3 bg-base-100">
        <figure>
            <img src="https://picsum.photos/id/1005/400/250">
          </figure> 
        <div class="card-body">
          <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
          <div class="mb-4 space-x-2 card-actions">
            <div class="badge badge-accent">Colors</div>
            <div class="badge badge-accent">UI Design</div>
            <div class="badge badge-accent">Creativity</div>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end space-x-2 card-actions">
            <button class="btn btn-primary">Login</button>
            <button class="btn">Register</button>
          </div>
        </div>
</div>
</div> -->

<!-- <div class="card text-center shadow-2xl py-10" href={`/movie/${movie.id}`} transition:fade>
	<figure class="px-10 pt-10">
		<img class="rounded-xl h-330 w-22" src={movie.poster_path} alt={movie.title} />
	</figure>
	<div class="mx-10 my-6 rounded-xl justify-center text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 h-10 w-10.">⭐{movie.vote_average} </div>
	<div class="justify-center card-actions">
		<a href="/film/{movie.id}" class="btn btn-accent btn-active" role="button" aria-pressed="true"
			>O filmie</a
		>
		<button class="btn btn-primary" on:click={incrementClaps}>
			❤
			<div class="badge ml-2 badge-outline">{movie.vote_count}</div>
		</button>
	</div>
</div> -->

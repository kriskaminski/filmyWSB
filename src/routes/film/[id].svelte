<script context="module">
    import { getMovieById } from "../../moviestore";
    import MovieCard from "../../components/movieCard.svelte";
    
    export async function load(ctx) {
        let id = ctx.page.params.id;
        const movie = await getMovieById(id);
        console.log({ movie });
        return { props: { movie }}
    }
</script>
<script>
    export let movie;
    // const type = pokeman.types[0].type.name;
</script>
<svelte:head>
	<title>FilmyWSB - {movie.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
    <MovieCard movie={movie} />
</div>

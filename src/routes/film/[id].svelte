<script context="module">
    import { getMovieById } from "../../moviestore";
    import MovieCard from "../../components/MovieCard.svelte";
    import SingleMovie from "../../components/SingleMovie.svelte";
    
    export async function load({params}) {
        console.log(params)
        const movie = await getMovieById(params.id);
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
<!-- 
<div class="flex flex-col items-center">
    <MovieCard movie={movie} />
</div> -->

<SingleMovie {movie} />
<script context="module">
	import { getMovieById } from '../../moviestore';
	import SingleMovie from '../../components/SingleMovie.svelte';

	export async function load({ params }) {
		console.log(params);
		const movie = await getMovieById(params.id);
		console.log({ movie });
		return { props: { movie } };
	}
</script>

<script>
	export let movie;
</script>

<svelte:head>
	<title>FilmyWSB</title>
</svelte:head>

<SingleMovie {movie} />

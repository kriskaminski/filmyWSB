<script>
import Menu from "../components/Menu.svelte";
</script>

<main class="p-8 mx-auto bg-white">
    <Menu/>
        <slot></slot>
</main>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
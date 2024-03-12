<script>
	import AppNavBar from '@/lib/components/AppNavBar.svelte';
	import '../app.pcss';

	export let data;
</script>

<div class="container px-4 md:px-6">
	<AppNavBar user={data.user} />
	<main>
		<slot />
	</main>
</div>

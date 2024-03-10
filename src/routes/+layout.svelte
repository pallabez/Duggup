<script>
	import AppNavBar from '@/lib/components/AppNavBar.svelte';
	import '../app.pcss';

	export let data;
</script>

<div class="lg:container">
	<AppNavBar user={data.user} />
	<main>
		<slot />
	</main>
</div>

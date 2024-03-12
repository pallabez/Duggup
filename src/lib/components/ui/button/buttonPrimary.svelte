<script>
	import Button from './button.svelte';
</script>

<!-- Todo: Use tailwind function to merge class from props -->
<Button
	on:click
	on:keydown
	{...$$restProps}
	class="group h-8 rounded-sm border border-solid border-border px-4 text-sm font-normal shadow-button-primary hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
>
	<slot />
</Button>

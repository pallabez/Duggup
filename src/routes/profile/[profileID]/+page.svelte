<script>
	import ProfileDetail from './ProfileDetail.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { user, timeline } = data;
</script>

<div class="mx-auto w-full pt-8 lg:w-10/12">
	<ProfileDetail {user} />
</div>

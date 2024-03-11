<script>
	import ProfileDetail from './ProfileDetail.svelte';
	import Timeline from './Timeline.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { user, timeline } = data;
</script>

<section class="mx-auto w-full pt-8 lg:w-10/12">
	<ProfileDetail {user} />
</section>

<section class="relative mx-auto w-full pt-8 lg:w-10/12">
	<Timeline {timeline} />
</section>

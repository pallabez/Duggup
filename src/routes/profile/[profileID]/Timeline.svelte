<script lang="ts">
	import type { Timeline } from '@/types/Timeline';
	import TimelineStories from './TimelineStories.svelte';
	import TimelineJobStatus from './TimelineJobStatus.svelte';

	export let timeline: Timeline;
</script>

{#each timeline as timelineItem}
	{#if timelineItem.type == 'STORIES'}
		<TimelineStories item={timelineItem} />
	{:else if timelineItem.type == 'JOB_CHANGE'}
		<TimelineJobStatus item={timelineItem} />
	{/if}
{/each}

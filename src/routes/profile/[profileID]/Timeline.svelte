<script lang="ts">
	import type { Timeline } from '@/types/Timeline';
	import TimelineStories from './TimelineStories.svelte';
	import TimelineJobStatus from './TimelineJobStatus.svelte';

	export let timeline: Timeline;
</script>

<div class="relative -left-[108px]">
	{#each timeline as timelineItem}
		{#if timelineItem.type == 'STORIES'}
			<TimelineStories item={timelineItem} />
		{:else if timelineItem.type == 'JOB_CHANGE'}
			<TimelineJobStatus item={timelineItem} />
		{/if}
	{/each}

	<div class="absolute left-[162px] top-0 z-0 h-full border-l-2 border-dotted border-border" />
</div>

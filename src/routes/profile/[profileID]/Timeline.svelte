<script lang="ts">
	import type { Timeline } from '@/types/Timeline';
	import TimelineStories from './TimelineStories.svelte';
	import TimelineJobStatus from './TimelineJobStatus.svelte';

	export let timeline: Timeline;
</script>

<div class="relative -left-[90px]">
	{#each timeline as timelineItem}
		<div class="relative z-10 flex items-center gap-3 py-2">
			{#if timelineItem.type == 'STORIES'}
				<TimelineStories item={timelineItem} />
			{:else if timelineItem.type == 'JOB_CHANGE'}
				<TimelineJobStatus item={timelineItem} />
			{/if}
		</div>
	{/each}

	<div class="absolute left-[143px] top-0 z-0 h-full border-l-2 border-dotted border-border" />
</div>

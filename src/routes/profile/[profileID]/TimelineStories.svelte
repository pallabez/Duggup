<script lang="ts">
	import type { TimelineStories } from '@/types/Timeline';
	import markSvg from '$lib/assets/profile/mark_stories.svg';

	export let item: TimelineStories;
</script>

<div class="relative z-10 flex items-center gap-6 py-2">
	<div class="invisible absolute flex w-32 -translate-x-full flex-col items-end pr-10 lg:visible">
		<span class="text-xs text-muted-foreground">{item.displayDate}</span>
	</div>

	<img src={markSvg} alt="" class="absolute -left-[1px] flex w-8 -translate-x-1/2 flex-col p-1.5" />

	<div class="flex flex-1 flex-wrap gap-8 pl-12">
		{#each item.stories as story}
			<a href="/" class="h-auto w-80 overflow-hidden rounded-lg border border-border-light">
				<img src={story.converUrl} alt="" class="block h-auto w-full" />
				<div class="p-6">
					<p class="line-clamp-2 text-sm">
						{story.title}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<script lang="ts">
	import type { TimelineJobStatus } from '@/types/Timeline';
	import * as Avatar from '@/lib/components/ui/avatar';
	import markSvg from '$lib/assets/profile/mark_jobstatus.svg';
	import markUpSvg from '$lib/assets/profile/mark_stories_indicator.svg';

	export let item: TimelineJobStatus;
</script>

<div class="relative z-10 flex h-40 max-w-[720px] items-center gap-6 py-2">
	<div class="invisible absolute flex w-32 -translate-x-full flex-col items-end pr-10 lg:visible">
		<Avatar.Root>
			<Avatar.Image src={item.companyLogo} alt="Company logo of {item.company}" />
		</Avatar.Root>

		<span class="text-lg font-bold">{item.company}</span>
		<span class="text-end text-xs text-muted-foreground">{item.companyLocation}</span>
		<span class="text-xs text-muted-foreground">Joined</span>
		<span class="text-xs text-muted-foreground">{item.displayDate}</span>
	</div>

	<img src={markUpSvg} alt="" class="absolute -left-[1px] top-0 -translate-x-1/2" />
	<img src={markSvg} alt="" class="absolute -left-[1px] flex w-8 -translate-x-1/2 flex-col" />

	<div class="ml-12 flex-1 rounded-sm bg-white px-5 py-4 shadow-timeline-jobstatus">
		<h2 class="text-xl font-bold text-primary-text">{item.role}</h2>
		<p class="mt-1 text-xs text-muted-foreground">
			{item.description}
		</p>
	</div>
</div>

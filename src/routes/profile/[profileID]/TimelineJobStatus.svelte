<script lang="ts">
	import type { TimelineJobStatus } from '@/types/Timeline';
	import * as Avatar from '@/lib/components/ui/avatar';
	import markSvg from '$lib/assets/profile/mark_jobstatus.svg';
	import markUpSvg from '$lib/assets/profile/mark_stories_indicator.svg';

	export let item: TimelineJobStatus;
</script>

<div class="relative z-10 flex items-center gap-6 py-2">
	<div class="w-34 invisible flex flex-col items-end lg:visible">
		<Avatar.Root>
			<Avatar.Image src={item.companyLogo} alt="Company logo of {item.company}" />
		</Avatar.Root>

		<span class="text-lg font-bold">{item.company}</span>
		<span class="text-xs text-muted-foreground">{item.companyLocation}</span>
		<span class="text-xs text-muted-foreground">Joined</span>
		<span class="text-xs text-muted-foreground">{item.displayDate}</span>
	</div>

	<div class="flex flex-col">
		<img src={markUpSvg} alt="" class="absolute top-0" />
		<img src={markSvg} alt="" class="" />
	</div>

	<div class="flex-1 rounded-sm bg-white px-5 py-4 shadow-timeline-jobstatus">
		<h2 class="text-xl font-bold text-primary-text">{item.role}</h2>
		<p class="mt-1 text-xs text-muted-foreground">
			{item.description}
		</p>
	</div>
</div>

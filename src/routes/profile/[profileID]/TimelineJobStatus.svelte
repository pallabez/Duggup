<script lang="ts">
	import type { TimelineJobStatus } from '@/types/Timeline';
	import * as Avatar from '@/lib/components/ui/avatar';
	import markSvg from '$lib/assets/profile/mark_jobstatus.svg';
	import markUpSvg from '$lib/assets/profile/mark_stories_indicator.svg';

	export let item: TimelineJobStatus;
</script>

<div class="w-34 invisible flex flex-col items-center lg:visible">
	<Avatar.Root>
		<Avatar.Image src={item.companyLogo} alt="Company logo of {item.company}" />
	</Avatar.Root>

	<span class="text-lg font-bold">{item.company}</span>
	<span class="text-xs text-muted-foreground">{item.companyLocation}</span>
	<span class="text-xs text-muted-foreground">Joined</span>
	<span class="text-xs text-muted-foreground">{item.displayDate}</span>
</div>

<div>
	<img src={markUpSvg} alt="" class="absolute top-0 -translate-x-1/4" />
	<img src={markSvg} alt="" class="absolute -translate-x-1/4 -translate-y-1/4" />
</div>

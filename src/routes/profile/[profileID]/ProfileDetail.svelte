<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import ButtonPrimary from '@/lib/components/ui/button/buttonPrimary.svelte';

	import websiteLinkLogo from '$lib/assets/profile/website_link.svg';
	import dropdownLogo from '$lib/assets/profile/dropdown.svg';

	type User = {
		id: string;
		username: string;
		bio: string;
		avatar: string;
		websiteLink: string;
		isFollowing: boolean;
		companyLogo: string;
		companyName: string;
		companyPosition: string;
	};
	export let user: User;

	// Todo: Move this logic from to parent component
	let isFollowing = false;
	function onFollowClick() {
		isFollowing = !isFollowing;
	}
</script>

<div class="flex">
	<div class="flex w-28 flex-col items-center gap-2 md:mr-16">
		<Avatar.Root class="h-24 w-24">
			<Avatar.Image src={user.avatar} alt="Avatar of {user.username}" />
			<Avatar.Fallback>Avatar</Avatar.Fallback>
		</Avatar.Root>

		<h3 class="text-wrap text-center text-2xl font-bold leading-7 text-text-light">
			{user.username}
		</h3>
	</div>

	<div class="flex flex-1 flex-col py-2">
		<div class="flex flex-1">
			<p class="w-11/12 max-w-2xl text-sm leading-6">{user.bio}</p>
			<div class="ml-auto flex flex-col items-end">
				<Avatar.Root>
					<Avatar.Image src={user.companyLogo} alt="Logo of {user.companyName}" />
					<Avatar.Fallback>Company Logo</Avatar.Fallback>
				</Avatar.Root>
				<span class="font-bold">{user.companyName}</span>
				<span class="text-end text-xs text-muted-foreground">{user.companyPosition}</span>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<ButtonPrimary on:click={onFollowClick}>{isFollowing ? 'Followed' : 'Follow'}</ButtonPrimary>

			<div class="flex items-center gap-4">
				<a href={user.websiteLink} target="_blank" class="flex gap-1">
					<span class="text-sm">My website</span>
					<img src={websiteLinkLogo} alt="" />
				</a>

				<div>
					<img src={dropdownLogo} alt="Profile dropdown" />
				</div>
			</div>
		</div>
	</div>
</div>

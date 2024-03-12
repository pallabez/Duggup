<script lang="ts">
	import brandText from '$lib/assets/duggup_text.svg';
	import brandLogo from '$lib/assets/duggup_logo.svg';
	import homeLogo from '$lib/assets/navbar/home.svg';
	import exploreLogo from '$lib/assets/navbar/explore.svg';
	import learnLogo from '$lib/assets/navbar/learn.svg';
	import postLogo from '$lib/assets/navbar/post.svg';
	import dropdownLogo from '$lib/assets/navbar/dropdown.svg';

	import ButtonPrimary from '$lib/components/ui/button/buttonPrimary.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	type User = {
		id: string;
		username: string;
		avatar: string;
	};

	export let user: User | undefined;
</script>

<header class="flex h-16 items-center border-b border-dotted">
	<a href="/" class="flex space-x-1">
		<img src={brandLogo} alt="Logo" />
		<img src={brandText} alt="Duggup" />
	</a>

	<div class="flex-1" />

	<nav class="flex shrink-0 items-center lg:gap-4">
		<a href="/" class="flex items-center gap-1 p-2">
			<img src={homeLogo} alt="" />
			<span class="hidden text-text-light md:block">Home</span>
		</a>
		<a href="/explore" class="flex items-center p-2">
			<img src={exploreLogo} alt="" />
			<span class="hidden text-text-light md:block">Explore</span>
		</a>
		<a href="/learn" class="flex items-center gap-1 p-2">
			<img src={learnLogo} alt="" />
			<span class="hidden text-text-light md:block">Learn</span>
		</a>
	</nav>

	<!-- Todo: Change logo to white on hover -->
	<div class="md:mx-6 lg:mx-10">
		<ButtonPrimary>
			<img src={postLogo} alt="" class="mr-2 hidden group-hover:mix-blend-multiply md:block" />
			Post
		</ButtonPrimary>
	</div>

	{#if user}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<div class="flex items-center gap-3">
					<Avatar.Root>
						<Avatar.Image src={user.avatar} alt="Avatar" />
						<Avatar.Fallback>Avatar</Avatar.Fallback>
					</Avatar.Root>

					<span class="hidden md:block">
						{user.username}
					</span>
					<img src={dropdownLogo} alt="Dropdown" />
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content class="bg-primary">
				<DropdownMenu.Group>
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Profile</DropdownMenu.Item>
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{:else}
		loading...
	{/if}
</header>

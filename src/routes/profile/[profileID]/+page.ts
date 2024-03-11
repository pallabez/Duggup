import { getUserProfile, getUserTimeline } from '@/mocks/profile/profile.fetch';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		user: await getUserProfile(params.profileID),
		timeline: await getUserTimeline(params.profileID).timeline
	};
}

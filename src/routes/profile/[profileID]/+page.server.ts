import { getUserProfile, getUserTimeline } from '@/mocks/profile/profile.fetch';
import type { Config } from '@sveltejs/adapter-vercel';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		user: await getUserProfile(params.profileID),
		timeline: await getUserTimeline(params.profileID).timeline
	};
}

export const config: Config = {
	isr: {
		expiration: 60 * 60 * 10 // 1 hour
	}
};

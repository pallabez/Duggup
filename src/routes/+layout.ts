import { getUserProfile } from '@/mocks/profile/profile.fetch';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		user: await getUserProfile('self')
	};
}

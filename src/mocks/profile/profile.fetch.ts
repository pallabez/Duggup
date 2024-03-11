import type { Timeline } from '@/types/Timeline';
import { USER_PROFILE, USER_TIMELINE } from './profile.mock';

export const getUserProfile = (profileID: string) => {
	return USER_PROFILE;
};

export const getUserTimeline = (
	profileID: string
): {
	userID: string;
	timeline: Timeline;
} => {
	return USER_TIMELINE;
};

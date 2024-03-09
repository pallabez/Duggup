import { USER_PROFILE, USER_TIMELINE } from './profile.mock';

export const getUserProfile = async (profileID: string) => {
	return USER_PROFILE;
};

export const getUserTimeline = async (profileID: string) => {
	return USER_TIMELINE;
};

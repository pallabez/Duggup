import avatar from '$lib/assets/profile_krishna/avatar.png';
import duggupCompanyLogo from '$lib/assets/profile_krishna/company_duggup.svg';
import betterupCompanyLogo from '$lib/assets/profile_krishna/company_betterup.svg';
import mostPeopleCover from '$lib/assets/profile_krishna/timeline_most-people.png';
import noAmountCover from '$lib/assets/profile_krishna/timeline_no-amount.png';
import startupLessionCover from '$lib/assets/profile_krishna/timeline_startup-lesson.png';
import yourBiggestCover from '$lib/assets/profile_krishna/timeline_your-biggest.png';
import type { Timeline } from '@/types/Timeline';

export const USER_PROFILE = {
	id: '1',
	username: 'Krishna Kiran',
	bio: 'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
	avatar: avatar,
	websiteLink: '',
	isFollowing: false,
	companyLogo: duggupCompanyLogo,
	companyName: 'Duggup',
	companyPosition: 'Co-Founder and CEO'
};

export const USER_TIMELINE: {
	userID: string;
	timeline: Timeline;
} = {
	userID: '1',
	timeline: [
		{
			id: '1',
			type: 'STORIES',
			displayDate: 'Dec 2023',
			stories: [
				{
					storyID: '11',
					converUrl: noAmountCover,
					title: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					storyID: '12',
					converUrl: mostPeopleCover,
					title:
						"Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
				}
			]
		},
		{
			id: '2',
			type: 'JOB_CHANGE',
			displayDate: 'Nov 2023',
			company: 'Duggup',
			companyLogo: duggupCompanyLogo,
			companyLocation: 'San Francisco Bay Area',
			role: 'Co-Founder and CEO',
			description: 'Full-time · Remote'
		},
		{
			id: '3',
			type: 'STORIES',
			displayDate: 'Dec 2023',
			stories: [
				{
					storyID: '21',
					converUrl: startupLessionCover,
					title: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					storyID: '22',
					converUrl: yourBiggestCover,
					title: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		},
		{
			id: '4',
			type: 'JOB_CHANGE',
			displayDate: 'Sep 2023',
			company: 'BetterUp',
			companyLogo: betterupCompanyLogo,
			companyLocation: 'San Francisco Bay Area',
			role: 'VP Engineering',
			description: 'Full-time'
		}
	]
};

import avatar from '$lib/assets/profile_krishna/avatar.png';
import companyLogo from '$lib/assets/profile_krishna/company_duggup.svg';

export const USER_PROFILE = {
	id: '1',
	username: 'Krishna Kiran',
	bio: 'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
	avatar: avatar,
	websiteLink: '',
	isFollowing: false,
	companyLogo: companyLogo,
	companyName: 'Duggup',
	companyPosition: 'Co-Founder and CEO'
};

export const USER_TIMELINE = {
	userID: '1',
	timeline: [
		{
			id: '1',
			type: 'STORIES',
			displayDate: 'Dec 2023',
			stories: [
				{
					storyID: '11',
					title: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					storyID: '12',
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
			companyLogo: '',
			companyLocation: 'San Francisco Bay Area',
			role: 'Co-Founder and CEO',
			position: 'Full-time',
			location: 'Remote'
		},
		{
			id: '3',
			type: 'STORIES',
			displayDate: 'Dec 2023',
			stories: [
				{
					storyID: '21',
					title: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					storyID: '22',
					title: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		},
		{
			id: '4',
			type: 'JOB_CHANGE',
			displayDate: 'Sep 2023',
			company: 'BetterUp',
			companyLogo: '',
			companyLocation: 'San Francisco Bay Area',
			role: 'VP Engineering',
			position: 'Full-time',
			location: null
		}
	]
};

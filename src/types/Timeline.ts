export type Story = {
	storyID: string;
	title: string;
};

export type Timeline = (TimelineStories | TimelineJobStatus)[];

export type TimelineStories = {
	stories: Story[];
	id: string;
	type: 'STORIES';
	displayDate: string;
};

export type TimelineJobStatus = {
	id: string;
	type: 'JOB_CHANGE';
	displayDate: string;
	company: string;
	companyLogo: string;
	companyLocation: string;
	role: string;
	position: string;
	location: string | undefined;
};

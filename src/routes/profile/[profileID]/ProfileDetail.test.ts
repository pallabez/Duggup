import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProfileDetail from './ProfileDetail.svelte';
import { USER_PROFILE } from '@/mocks/profile/profile.mock';

const props = {
	user: USER_PROFILE
};

describe('ProfileDetail', () => {
	test('should render', () => {
		render(ProfileDetail, { props });
	});

	test('should display username & avatar', () => {
		render(ProfileDetail, { props });

		const userName = screen.getByText(props.user.username);
		const userAvatar = screen.getByAltText(`Avatar of ${props.user.username}`);

		expect(userAvatar);
		expect(userName);
	});

	test('should display user bio', () => {
		render(ProfileDetail, { props });
		const bioEl = screen.getByText(props.user.bio);
		expect(bioEl);
	});

	test('should display user company detail', () => {
		render(ProfileDetail, { props });

		const companyNameEl = screen.getByText(props.user.companyName);
		const companyPostitionEl = screen.getByText(props.user.companyPosition);
		const companyLogo = screen.getByAltText(`Logo of ${props.user.companyName}`);

		expect(companyNameEl);
		expect(companyPostitionEl);
		expect(companyLogo);
	});

	test('should contain follow button', () => {
		render(ProfileDetail, { props });
		const followBtn = screen.getByText('Follow');
		expect(followBtn);
	});
});

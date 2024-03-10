import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import AppNavBar from './AppNavBar.svelte';

const props = {
	user: {
		username: 'John Doe',
		id: '1',
		avatar: 'https://via.placeholder.com/150'
	}
};

describe('AppNavBar', () => {
	test('should render', () => {
		render(AppNavBar, { props });
	});

	test('should have header element', () => {
		render(AppNavBar, { props });
		const headerElement = screen.getByRole('banner');
		expect(headerElement);
	});

	test('should have nav element', () => {
		render(AppNavBar, { props });
		const navElement = screen.getByRole('navigation');
		expect(navElement);
	});

	test('should have all links', () => {
		render(AppNavBar, { props });

		const links = screen.getAllByRole('link');

		expect(links.length).toBe(4);
		expect(links[0].getAttribute('href')).toBe('/');
		expect(links[1].textContent).toContain('Home');
		expect(links[2].textContent).toContain('Explore');
		expect(links[3].textContent).toContain('Learn');
	});

	test('should display User details', () => {
		render(AppNavBar, { props });

		const username = screen.getByText(props.user.username);
		const userAvatar = screen.getByAltText('Avatar');

		expect(username);
		expect(userAvatar.getAttribute('src')).toBe(props.user.avatar);
	});
});

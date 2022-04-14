import { render, screen } from '@testing-library/react';
import Level from '../components/Level';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('if start game displays picture', () => {
	render(<Level />);

	userEvent.click(screen.getByRole('button'));

	const image = screen.getByAltText("Where's Waldo");

	expect(image).toBeTruthy();
});

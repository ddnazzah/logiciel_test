import { render } from '@testing-library/react';
import React from 'react';
import Registration from '../Registration';

test('renders learn react link', () => {
	const { getByText } = render(<Registration />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

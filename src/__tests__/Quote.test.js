import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Components/Shortquote';

it('renders quote page', () => {
  const quotes = render(<Quote />);
  expect(quotes).toMatchSnapshot();
});

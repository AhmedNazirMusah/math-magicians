import React from 'react';
import { render } from '@testing-library/react';
import Homepage from '../Components/homepage';

it('renders hompege', () => {
  const home = render(<Homepage />);
  expect(home).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Components/Calculator';

it('Performs simple calculations', () => {
  const Calculate = render(<Calculator />);
  expect(Calculate).toMatchSnapshot();
});

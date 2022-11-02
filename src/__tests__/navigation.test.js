import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navigation';

it('renders the navigation of the page', () => {
  const nav = render(
    <BrowserRouter><Navbar /></BrowserRouter>,
  );
  expect(nav).toMatchSnapshot();
});

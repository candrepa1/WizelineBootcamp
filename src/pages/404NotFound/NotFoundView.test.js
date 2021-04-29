import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFoundView from './NotFoundView.page';

describe('testing UI of the 404 view', () => {
  const { getByTestId, getByRole } = render(
    <MemoryRouter>
      <NotFoundView />
    </MemoryRouter>
  );
  test('title, image, button, description', () => {
    expect(getByTestId('404-title')).toHaveTextContent('404');
    expect(getByTestId('404-image')).toHaveAttribute(
      'src',
      'https://i0.wp.com/www.titanui.com/wp-content/uploads/2018/07/01/Valley-Sunset-Scenery-Vector-Illustration-min.jpg?fit=898%2C581&ssl=1'
    );
    expect(getByRole('button')).toHaveTextContent('GO HOME');
    expect(getByTestId('404-description')).toHaveTextContent(
      'Sorry, the page you are looking for could not be found'
    );
  });
});

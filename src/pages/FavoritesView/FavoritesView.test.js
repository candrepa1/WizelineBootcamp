import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FavoritesView from './FavoritesView.page';

describe('testing UI of the 404 view', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <FavoritesView />
    </MemoryRouter>
  );
  test('title, image, button, description', () => {
    expect(getByRole('heading')).toHaveTextContent(
      'You have not added a video to your favorites yet'
    );
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header.component';
import '@testing-library/jest-dom/extend-expect';

it('renders title text content correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(queryByTestId('title-content')).toHaveTextContent('Wizeline Challenge');
  expect(queryByPlaceholderText('Search')).toBeTruthy();
});

describe('image', () => {
  it("image must have src = 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' and alt = 'user'", () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(queryByTestId('image')).toHaveAttribute(
      'src',
      'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    );
    expect(queryByTestId('image')).toHaveAttribute('alt', 'user');
  });
});

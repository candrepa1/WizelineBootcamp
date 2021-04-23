import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '../../utils/test-utils';
import Header from './Header.component';
import '@testing-library/jest-dom/extend-expect';

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

test('renders title text content correctly', () => {
  const providerProps = {
    term: 'wizeline',
    input: 'wizeline',
    changeHandler: jest.fn(),
    submitHandler: jest.fn(),
  };
  const { queryByTestId } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
    { providerProps }
  );
  expect(queryByTestId('title-content')).toHaveTextContent('Wizeline Challenge');
});

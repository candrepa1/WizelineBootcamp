import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { server } from '../../mocks/server';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer.component';
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('renders cards when info is fetched successfully ', async () => {
  const { getByText } = render(<CardContainer />);

  await waitFor(() => expect(getByText(/We are Wizeline./i)).toBeInTheDocument());
});

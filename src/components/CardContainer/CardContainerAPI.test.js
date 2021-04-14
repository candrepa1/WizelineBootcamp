import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { render, screen } from '../../utils/test-utils';
import { server } from '../../mocks/server';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer.component';
// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('renders cards when info is fetched successfully ', async () => {
  render(
    <MemoryRouter>
      <CardContainer video="wizeline" />
    </MemoryRouter>
  );

  expect(await screen.findByTestId('_PVKwNJf_qw9nukFeRFOtQ837o0')).toBeInTheDocument();
});

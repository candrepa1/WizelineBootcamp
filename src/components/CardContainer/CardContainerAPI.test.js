import React from 'react';
import '@testing-library/jest-dom';
import { render, waitForElement } from '@testing-library/react';
import { server } from '../../mocks/server';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer.component';
// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('renders cards when info is fetched successfully ', async () => {
  // const container = render(<CardContainer />);
  // console.log(container);

  // most current one:
  const { getByText } = render(<CardContainer />);
  jest.advanceTimersByTime(8000);
  await waitForElement(() => {
    return getByText('We are Wizeline');
  });
  expect(getByText('We are Wizeline')).toBeVisible();

  // expect(
  //   await findByText(getByTestId('card-container'), 'We are Wizeline')
  // ).toBeVisible();
  // expect(await findByText(container, 'We are Wizeline')).toBeVisible();
  // await waitFor(() => expect(findByText(/We are Wizeline./i)).toBeInTheDocument());
});

test.skip('fetch api', async () => {
  console.log('testing');
  await window
    .fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvMiTRXMR0m35YMRpJZzU_pLIKs88MYkg&type=video&part=snippet&maxResults=25&q=Wizeline`
    )
    .then((response) => response.json())
    .then(console.log);
});

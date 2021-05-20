import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HomePage from '../../pages/Home/Home.page';
import Header from '../Header/Header.component';
import App from './App.component';
import VideoView from '../../pages/VideoView/VideoView.page';
import NotFoundView from '../../pages/404NotFound/NotFoundView.page';

jest.mock('../Header/Header.component');
jest.mock('../../pages/VideoView/VideoView.page');
jest.mock('../../pages/Home/Home.page');
jest.mock('../../pages/404NotFound/NotFoundView.page');

describe('Testing the router', () => {
  test('Should render the header and HomePage on default route', () => {
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    Header.mockImplementation(() => <div>HeaderMock</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePageMock')).toBeInTheDocument();
    expect(screen.getByText('HeaderMock')).toBeInTheDocument();
  });
  test("Should render the header and VideoViewPage on route '/videos/:id'", () => {
    Header.mockImplementation(() => <div>HeaderMock</div>);
    VideoView.mockImplementation(() => <div>VideoViewPageMock</div>);

    render(
      <MemoryRouter initialEntries={['/videos/:id']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('HeaderMock')).toBeInTheDocument();
    expect(screen.getByText('VideoViewPageMock')).toBeInTheDocument();
  });

  test("Should render the NotFoundView on route '/404", () => {
    NotFoundView.mockImplementation(() => <div>NotFoundViewMock</div>);

    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('NotFoundViewMock')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import RelatedCard from './RelatedCard.component';
import { infoObject, fullArray } from '../MockedDataTest';

it('renders related card component succesfully', () => {
  render(
    <MemoryRouter>
      <RelatedCard videoInfo={infoObject} fullList={fullArray} />
    </MemoryRouter>
  );

  expect(screen.getByRole('img', { name: /Wizeline/i })).toBeInTheDocument();
});

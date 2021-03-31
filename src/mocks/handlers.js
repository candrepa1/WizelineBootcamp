import { rest } from 'msw';
import youtubeMock from '../components/CardContainer/youtube-videos-mock.json';

export const handlers = [
  rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ youtubeMock }));
  }),
];

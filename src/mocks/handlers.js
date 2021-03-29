import { rest } from 'msw';
import youtubeMock from '../components/CardContainer/youtube-videos-mock.json';

export const handlers = [
  rest.get(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvMiTRXMR0m35YMRpJZzU_pLIKs88MYkg&type=video&part=snippet&maxResults=25&q=wizeline',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(youtubeMock));
    }
  ),
];

import { http, HttpResponse, delay } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import type { IPost } from '@/types/Post';

const baseUrl: string = 'http://localhost:3000/';

export const testPosts: IPost[] = [
  {
    id: '1',
    title: 'First Post',
    date: '2024-09-21T14:25:00Z',
    length: 4,
    preview: 'First post preview text',
    categories: ['coding', 'life'],
    image: '/react-logo.png',
  },
  {
    id: '2',
    title: 'Second Post',
    date: '2024-10-12T14:25:00Z',
    length: 10,
    preview: 'First post preview text',
    categories: ['framework', 'life'],
    image: '/react-logo.png',
  },
  {
    id: '3',
    title: 'Third Post',
    date: '2024-10-12T14:25:00Z',
    length: 10,
    preview: 'First post preview text',
    categories: ['framework', 'life'],
    image: '/react-logo.png',
  },
];

// Generic Types
type MswGeneric = object;

// Mock GET request
const getReq = http.get<MswGeneric, MswGeneric, IPost | IPost[]>(
  `/posts.json`,
  async () => HttpResponse.json(testPosts)
);

// Mock POST request
type PostResBody = {
  id: string;
  orderNumber: number;
  guitar: string;
};

const postReq = http.post<MswGeneric, MswGeneric, PostResBody>(
  `${baseUrl}/order`,
  async () => {
    await delay(400);

    return HttpResponse.json(
      { id: uuidv4(), orderNumber: 12345, guitar: 'Eastman E1D' },
      { status: 201 }
    );
  }
);

// Mock Error request
const errorReq = http.get(
  `${baseUrl}/guitars`,
  () => new HttpResponse(null, { status: 401 })
);

const handlers = [getReq, postReq, errorReq];

export default handlers;

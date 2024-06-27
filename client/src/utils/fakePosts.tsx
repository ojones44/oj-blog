type Category = 'coding' | 'framework' | 'learning' | 'life';

interface FakePost {
  postTitle: string;
  postDate: Date;
  postBody: string;
  category: Category[];
}

export const fakePosts: FakePost[] = [
  {
    postTitle: 'Post 1',
    postDate: new Date(),
    postBody: 'tbc',
    category: ['coding', 'learning'],
  },
  {
    postTitle: 'Post 2',
    postDate: new Date(),
    postBody: 'tbc',
    category: ['framework'],
  },
  {
    postTitle: 'Post 3',
    postDate: new Date(),
    postBody: 'tbc',
    category: ['life'],
  },
];

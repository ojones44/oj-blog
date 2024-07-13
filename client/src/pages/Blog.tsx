// component imports
import { Post } from '@/components';

export const Blog = () => (
  <>
    <Post />
    <Post />
    <Post />

    <button style={{ marginBottom: '2rem', marginRight: '2rem' }} type="button">
      This is a test
    </button>

    <input type="text" placeholder="Search posts..." />
  </>
);

// component imports
import { Post } from '@/components';

export const Blog = () => (
  <>
    <button style={{ marginBottom: '2rem' }} type="button">
      This is a test
    </button>

    <input type="text" placeholder="Search posts..." />

    <Post />
    <Post />
    <Post />
  </>
);

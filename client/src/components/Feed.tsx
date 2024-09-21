// component imports
import { Post } from '@/components/Post';

// type imports
import type { IPost } from '@/types/Post';

export const Feed = ({ posts }: { posts: IPost[] }) => (
  <section>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </section>
);

// react imports
import { useOutletContext } from 'react-router-dom';

// component imports
import { Post, Search } from '@/components';

// styled imports
import { BlogWrapper } from '@/wrappers/Blog';

// type imports
import type { ContextProps } from '@/types/Outlet';

export const Blog = () => {
  const [isSearching] = useOutletContext<ContextProps>();

  return (
    <BlogWrapper>
      <Search
        classes={isSearching ? 'search-item show-search' : 'search-item'}
        placeholder="Search blog posts..."
      />
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </BlogWrapper>
  );
};

// react imports
import { useOutletContext } from 'react-router-dom';

// component imports
import { useState } from 'react';
import { Search, Feed } from '@/components';

// hook imports
import { useAPI } from '@/hooks/useAPI';
import { useDebounce } from '@/hooks/useDebounce';

// styled imports
import * as SC from '@/wrappers/Blog';

// type imports
import type { OutletProps } from '@/types/Outlet';
import type { IPost } from '@/types/Post';

export const Blog = () => {
  const { isSearching } = useOutletContext<OutletProps>();
  const [searchbar, setSearchbar] = useState<string>('');
  const debouncedSearch = useDebounce(searchbar, 750);

  const {
    data: posts,
    isLoading,
    fetchError,
  } = useAPI<IPost[]>('/posts.json', 'GET');

  const searchComponentClasses = isSearching
    ? 'search-item show-search'
    : 'search-item';

  return (
    <SC.BlogWrapper>
      <Search
        classes={searchComponentClasses}
        placeholder="Search blog posts..."
        value={searchbar}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchbar(e.target.value);
          console.log(searchbar);
        }}
      />

      {isLoading && <h1>Loading posts...</h1>}
      {fetchError && <h1>Error fetching data: {fetchError}</h1>}

      {!isLoading && !fetchError && posts && (
        <Feed
          posts={posts.filter((post) => post.title.includes(debouncedSearch))}
        />
      )}
    </SC.BlogWrapper>
  );
};

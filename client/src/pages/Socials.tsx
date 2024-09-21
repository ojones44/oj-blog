// react imports
import { useOutletContext } from 'react-router-dom';

// component imports
import { Search } from '@/components';

// styled imports

// type imports
import type { OutletProps } from '@/types/Outlet';

export const Socials = () => {
  const { isSearching } = useOutletContext<OutletProps>();

  const searchComponentClasses = isSearching
    ? 'search-item show-search'
    : 'search-item';

  return (
    <section>
      <Search
        classes={searchComponentClasses}
        placeholder="Search social media posts..."
      />
      <div>
        <h1>Socials page</h1>
      </div>
    </section>
  );
};

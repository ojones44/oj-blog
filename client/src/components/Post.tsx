// styled imports
import * as SC from '@/wrappers/Post';

// type imports
import type { PostProps } from '@/types/Post';

// utils
import { dateFormatter } from '@/utils/dataFormatter';

export const Post = ({ post }: PostProps): JSX.Element => (
  <SC.PostWrapper>
    <div data-testid="blog-post" className="post-component">
      <div className="post-content">
        <h2 id="title">{post.title}</h2>
        <div data-testid="timestamps" className="info">
          <span>📅 {dateFormatter(post.date)}</span>
          <span>|</span>
          <span>📖 {post.length} min read</span>
        </div>
        <p data-testid="preview" id="preview">
          {post.preview}
        </p>
        <div data-testid="categories" className="categories">
          {post.categories.map((cat) => (
            <span key={cat} className={`category-${cat}`}>
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="post-image">
        <img src={post.image} alt="react-logo" />
      </div>
    </div>
  </SC.PostWrapper>
);

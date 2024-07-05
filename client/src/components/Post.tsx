import reactLogo from '@/assets/react-logo.png';

// styled imports
import { PostWrapper } from '@/wrappers/Post';

export const Post = (): JSX.Element => (
  <PostWrapper>
    <div className="post-component">
      <div className="post-content">
        <h2 id="title">Why are big React applications difficult to manage?</h2>
        <div className="info">
          <span>📅 10th Sep 2023</span>
          <span>|</span>
          <span>📖 4 min read</span>
        </div>
        <p id="preview">
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components.{' '}
        </p>
        <div className="categories">
          <span className="category-coding">coding</span>
          <span className="category-framework">framework</span>
          <span className="category-life">life</span>
        </div>
      </div>
      <div className="post-image">
        <img src={reactLogo} alt="react-logo" />
      </div>
    </div>
  </PostWrapper>
);

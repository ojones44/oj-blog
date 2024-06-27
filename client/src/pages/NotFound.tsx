import { Link } from 'react-router-dom';

export const NotFound = () => (
  <section>
    <h1>Not Found</h1>
    <Link to="/">
      <button type="button">GO HOME</button>
    </Link>
  </section>
);

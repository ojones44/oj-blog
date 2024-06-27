import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

export const NotFound = (): JSX.Element => {
  const error: unknown = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <section>
        <h3>Page not Found!</h3>
        <Link to="/">
          <button type="button">Go back to the home page</button>
        </Link>
      </section>
    );
  }

  return (
    <div>
      <h3>Something went wrong!</h3>
    </div>
  );
};

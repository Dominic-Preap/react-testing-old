import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// import { RoutePath } from '@common/utils';

interface Props extends RouteProps {
  authenticated: boolean;
}

/**
 * Protected routes and authentication with React Router v4
 *
 * @see https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 */
export function PrivateRoute({ component, authenticated, ...rest }: Props) {
  const Component = component as any;
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          // TODO: Change default pathname if needed.
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

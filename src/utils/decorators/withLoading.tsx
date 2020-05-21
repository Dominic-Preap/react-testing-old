import * as React from 'react';
import { ChildProps } from 'react-apollo';

/**
 * Custom Decorator of Apollo Loading Wrapped Component
 * NOTE: must be used after `graphql` decorator
 *
 * @see https://github.com/apollographql/react-apollo/issues/272#issuecomment-292769256
 */
export function withLoading<C extends React.ComponentClass<any>>(Component: C): any {
  const LoadingComponent = (props: ChildProps) => {
    if (!props.data) return <Component {...props as any} />;

    const { loading, error } = props.data;
    // console.log('lading', loading);
    // console.log('error', error);
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading</div>;

    return <Component {...props as any} />;
  };

  return LoadingComponent as any;
}

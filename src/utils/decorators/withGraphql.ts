import { graphql as __graphql, OperationOption } from 'react-apollo';

import { DocumentNode } from 'apollo-boost';

/**
 * Graphql typescript decorator
 *
 * @description the default graphql have a problem with typescript decorator against class component
 * @see https://github.com/apollographql/react-apollo/issues/1174
 * @see https://github.com/apollographql/react-apollo/blob/master/test/typescript-usage.tsx
 * @see https://github.com/apollographql/react-apollo/issues/460
 */
export function withGraphql<TProps, TResult>(
  gqlQuery: DocumentNode,
  operationOptions?: OperationOption<TProps, TResult>
): any {
  return __graphql(gqlQuery, operationOptions);
}

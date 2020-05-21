import * as React from 'react';
import { MockedResponse } from 'react-apollo/test-links';
import { MockedProvider } from 'react-apollo/test-utils';

import { RenderFunction } from '@storybook/react';

/**
 * Used only for mocking in storybook
 * @description Component which simplifies the testing of React components by mocking calls to the GraphQL endpoint.
 * @see https://www.apollographql.com/docs/react/recipes/testing/#testing-error-states
 */
export const ApolloStorybookMockedProvider = (story: RenderFunction, mocks: MockedResponse[]) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {story() as any}
  </MockedProvider>
);

import ApolloClient from 'apollo-boost';

// https://github.com/apollographql/apollo-client/issues/3044

export const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  credentials: 'include',
  request: async operation => {
    operation.setContext({
      headers: { authorization: 'randomToken' }
    });
  }
});

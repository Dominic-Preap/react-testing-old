require('dotenv').config();

// https://www.apollographql.com/docs/references/apollo-config
// https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output
// https://medium.com/open-graphql/automatically-generate-typescript-definitions-for-graphql-queries-with-apollo-codegen-e73eae72b561

module.exports = {
  client: {
    // ==================================
    // Used for `apollo client:codegen`
    // ==================================
    tagName: 'gql',
    service: {
      localSchemaFile: './schema.json'
    },
    addTypename: true,
    includes: ['src/**/*.{ts,tsx,gql}'],
    excludes: ['**/__tests__/**/*', '**/__stories__/**/*'],

    // ==================================
    // Used for `apollo schema:download`
    // ==================================
    service: {
      name: 'Countries',
      url: process.env.GRAPHQL_BASE_URL,
      headers: {
        authorization: process.env.GRAPHQL_AUTHORIZATION
      }
    }
  }
};

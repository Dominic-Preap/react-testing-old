const { resolve } = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    assets: resolve(__dirname, '../src/assets'),
    components: resolve(__dirname, '../src/components'),
    containers: resolve(__dirname, '../src/containers'),
    mutations: resolve(__dirname, '../src/mutations'),
    providers: resolve(__dirname, '../src/providers'),
    queries: resolve(__dirname, '../src/queries'),
    stores: resolve(__dirname, '../src/stores'),
    tests: resolve(__dirname, '../src/tests'),
    types: resolve(__dirname, '../src/types'),
    utils: resolve(__dirname, '../src/utils')
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      // {
      //   loader: require.resolve('awesome-typescript-loader')
      // }
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

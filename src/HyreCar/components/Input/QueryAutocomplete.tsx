import * as React from 'react';
import { Query } from 'react-apollo';

import get from 'lodash/get';

import { Autocomplete, OptionType, Props as AutocompleteProps } from './Autocomplete';

type MapKeys = { [K in keyof OptionType]: string };
type MapKeysFunc = (x: any, index: number) => MapKeys;
interface Props extends AutocompleteProps {
  /**
   * Graphql query (gql)
   */
  query: any;
  /**
   * Object key from graphql result for select options
   */
  queryField: string;
  /**
   * Label and value key mapping from that queryField
   */
  queryOptionsMapping: MapKeysFunc | MapKeys;
}

export const QueryAutocomplete: React.FC<Props> = props => {
  const { query, queryField, queryOptionsMapping: mapping, ...restProps } = props;

  return (
    <Query<any> query={query}>
      {({ data, loading }) => {
        const optionsData = (get(data, queryField) || []) as any[];

        // CHECK STORYBOOK FOR USAGE
        // =========================
        // Query mapping can be a function or object
        const isFunc = typeof mapping === 'function';
        const { label = '', value = '' } = !isFunc ? (mapping as MapKeys) : {};

        // If mapping is function, do mapping directly with its
        const options = isFunc
          ? optionsData.map(mapping as MapKeysFunc)
          : optionsData.map(x => ({ label: x[label], value: x[value] }));

        return <Autocomplete {...restProps} isLoading={loading} options={options} />;
      }}
    </Query>
  );
};

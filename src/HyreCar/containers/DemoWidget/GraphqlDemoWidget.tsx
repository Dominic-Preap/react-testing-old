import * as React from 'react';
import { Query } from 'react-apollo';

import { WidgetElement } from 'HyreCar/components/Widget';
import { GET_CATEGORY_LIST } from 'HyreCar/queries';

export const RentalTodayWidget = () => (
  <Query<{}> query={GET_CATEGORY_LIST} variables={{ code: '' }}>
    {({ loading, error }) => {
      if (error) return `Error! ${error}`;
      return <WidgetElement loading={loading} value="0" caption="today" md={3} sm={3} />;
    }}
  </Query>
);

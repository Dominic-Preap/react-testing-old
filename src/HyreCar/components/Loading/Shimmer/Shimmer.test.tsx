import * as React from 'react';
import { create } from 'react-test-renderer';

import { Shimmer } from './Shimmer';

describe('Shimmer component', () => {
  it('should render properly', () => {
    expect(create(<Shimmer />).toJSON()).toMatchSnapshot();
  });
});

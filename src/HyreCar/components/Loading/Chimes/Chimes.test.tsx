import * as React from 'react';
import { create } from 'react-test-renderer';

import { Chimes } from './Chimes';

describe('Chimes component', () => {
  it('should render properly', () => {
    expect(create(<Chimes />).toJSON()).toMatchSnapshot();
  });
});

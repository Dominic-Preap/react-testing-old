import * as React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'HyreCar/providers/ThemeProvider';

import { Spinner } from './Spinner';

describe('Spinner component', () => {
  it('should render properly', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Spinner />
        </ThemeProvider>
      ).toJSON()
    ).toMatchSnapshot();
  });
});

import * as React from 'react';

import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Shimmer } from './Shimmer';

storiesOf('HyreCar|Components/Loading', module).add('Shimmer', () => (
  <Shimmer width={number('Width', 100)} height={number('Height', 20)} round={boolean('Round', false)} />
));

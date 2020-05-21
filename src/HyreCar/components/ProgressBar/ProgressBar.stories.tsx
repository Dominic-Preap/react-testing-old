import * as React from 'react';

import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

storiesOf('HyreCar|Components', module).add('ProgressBar', () => (
  <div style={{ width: 500 }}>
    <ProgressBar maxStep={number('Max Step', 3)} currentStep={number('Current Step', 1)} />
  </div>
));

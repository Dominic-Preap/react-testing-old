import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Background } from './Background';

storiesOf('HyreCar|Components', module).add('Background', () => (
  <div>
    <p>Absolutely positioned to fit anywhere.</p>
    <Background />
  </div>
));

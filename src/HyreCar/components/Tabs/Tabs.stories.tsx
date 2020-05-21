import * as React from 'react';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Tabs } from './Tabs';

const renderTabs = () => (
  <Tabs
    tooltipIcon={HelpOutlineIcon as any}
    tooltipOnclick={action('TooltipClick')}
    tooltipTitle={text('Tooltip Title', `What is the difference?`)}
    routes={[
      {
        path: `/a`,
        title: text('First Route', 'Listings')
      },
      {
        path: `/b`,
        title: text('Second Route', 'In Progress')
      },
      {
        path: `/c`,
        title: 'On the Lot'
      }
    ]}
  />
);

storiesOf('HyreCar|Components', module).add('Tabs', renderTabs);

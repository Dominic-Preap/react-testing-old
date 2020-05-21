import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Dialog } from './Dialog';

const content = 'You may lose some of your progress. It only takes a few minutes to finish listing your cars.';
const renderDialog = () => (
  <Dialog
    title={text('Title', 'Are you sure you want to exit?')}
    contentText={text('Content', content)}
    open={boolean('Open', true)}
    cancelText={text('Cancel Text', 'Cancel')}
    onCancel={action('Cancel')}
    confirmText={text('Confirm Text', 'Yes, Exit')}
    onConfirm={action('Confirm')}
  />
);

storiesOf('HyreCar|Components', module).add('Dialog', renderDialog);

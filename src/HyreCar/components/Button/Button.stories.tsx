import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { FacebookButton, FlatButton, OutlinedButton, TextButton } from './Button';
import ButtonNotes from './Button.md';

const options = {
  Primary: 'primary',
  Secondary: 'secondary'
};
const defaultValue = 'primary';

const renderFaceBookButton = () => (
  <FacebookButton onClick={action('FacebookButtonClick')}>{text('Text', 'Login with Facebook')}</FacebookButton>
);

const renderFlatButton = () => (
  <FlatButton color={radios('Color', options, defaultValue) as any} onClick={action('FlatButtonClick')}>
    {text('Text', 'Click Me')}
  </FlatButton>
);

const renderOutlinedButton = () => (
  <OutlinedButton color={radios('Color', options, defaultValue) as any} onClick={action('OutlinedButtonClick')}>
    {text('Text', 'Click Me')}
  </OutlinedButton>
);

const renderTextButton = () => <TextButton onClick={action('TextButtonClick')}>{text('Text', 'Click Me')}</TextButton>;

storiesOf('HyreCar|Components/Button', module)
  .addParameters({ notes: ButtonNotes, info: { text: 'TODO: ButtonNotes' } })
  .add('FacebookButton', renderFaceBookButton)
  .add('FlatButton', renderFlatButton)
  .add('OutlinedButton', renderOutlinedButton)
  .add('TextButton', renderTextButton);

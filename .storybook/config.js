// @storybook/react must be on top, or there will be errors happen on the add-ons
// https://github.com/storybooks/storybook/issues/6185#issuecomment-476565528
import { addDecorator, configure } from '@storybook/react';

// Add-ons
import { withA11y } from '@storybook/addon-a11y';
import { withInfo as _withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { muiTheme } from 'storybook-addon-material-ui';

const withInfo = _withInfo({ header: false });
const theme = {
  palette: {
    background: { default: '#fafafa' },
    primary: { main: '#009cec' },
    secondary: { main: '#19857b' },
    text: { primary: '#606770' }
  },
  typography: {
    fontFamily: ['Muli', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
};

addDecorator(withA11y); // https://github.com/storybooks/storybook/tree/master/addons/a11y
addDecorator(withInfo); // https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withKnobs); // https://github.com/storybooks/storybook/tree/master/addons/knobs
addDecorator(centered); // https://github.com/storybooks/storybook/tree/master/addons/centered
addDecorator(muiTheme([theme])); // https://github.com/react-theming/storybook-addon-material-ui

function loadStories() {
  // automatically import all files ending in *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);

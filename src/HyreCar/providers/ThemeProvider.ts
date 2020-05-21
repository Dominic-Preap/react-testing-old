import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f4f7fc'
    },
    error: {
      main: red.A400
    },
    primary: {
      main: '#009cec'
    },
    secondary: {
      main: '#19857b'
    },
    text: {
      primary: '#606770'
    }
  },
  typography: {
    fontFamily: ['Muli', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});

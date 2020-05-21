import * as React from 'react';

import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: 50,
    overflow: 'hidden',
    transitionProperty: 'width',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease',
    zIndex: 2,

    '&&:hover': {
      width: 200,
      zIndex: 2
    }
  },
  container: {
    height: '100%',
    background: theme.palette.primary.main,
    paddingTop: 70
  }
}));

export const Sidebar: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Hidden only={['sm', 'xs']}>
      <div className={classes.root}>
        <div className={classes.container}>{children}</div>
      </div>
    </Hidden>
  );
};

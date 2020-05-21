import * as React from 'react';

import MuiDrawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backDrop: {
    background: 'rgba(0, 0, 0, 0.2)'
  },
  root: {
    height: '100%',
    width: 550,

    // Responsive on small screen
    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    }
  }
}));

interface Props {
  /**
   * Handle action when user click outside the drawer
   */
  onClickAway?: () => void;
  /**
   * Drawer open status
   */
  open?: boolean;
}

export const Drawer: React.FC<Props> = props => {
  const TRANSITION_DURATION = 300;
  const classes = useStyles();
  return (
    <MuiDrawer
      anchor="right"
      onClose={props.onClickAway}
      open={props.open}
      transitionDuration={TRANSITION_DURATION}
      BackdropProps={{ className: classes.backDrop }}
    >
      <div className={classes.root}>{props.children}</div>
    </MuiDrawer>
  );
};

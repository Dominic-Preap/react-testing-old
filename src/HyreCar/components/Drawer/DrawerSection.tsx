import * as React from 'react';

import blue from '@material-ui/core/colors/blue';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  head: {
    fontSize: 28,
    marginBottom: 24
  },
  root: {
    borderTop: `2px solid ${blue[50]}`,
    paddingBottom: 24,
    paddingTop: 24,

    [theme.breakpoints.down('sm')]: {
      paddingBottom: 10,
      paddingTop: 10
    }
  }
}));

interface Props {
  head?: string;
}

export const DrawerSection: React.FC<Props> = ({ children, head }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {head && (
        <Typography variant="h3" className={classes.head}>
          {head}
        </Typography>
      )}
      {/* --------------- */}
      {children}
    </div>
  );
};

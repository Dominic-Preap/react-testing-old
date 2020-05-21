import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3)
  },
  head: {
    fontSize: 30
  },
  tooltipIcon: {
    color: lightBlue[100],
    cursor: 'pointer',
    fontSize: 35
  },
  tooltip: {
    background: '#EDFBFF',
    border: `1px solid ${lightBlue[100]}`,
    borderRadius: 4,
    display: 'block',
    marginBottom: theme.spacing(2),
    padding: '20px 30px'
  }
}));

interface Props {
  head?: string;
}

export const DrawerTooltip: React.FC<Props> = ({ children, head }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="h4" component="span" className={classes.head}>
          {head}
        </Typography>

        {children && <HelpOutlineIcon className={classes.tooltipIcon} onClick={() => setOpen(!open)} />}
      </div>

      <Collapse in={open}>
        <div className={classes.tooltip}>{children}</div>
      </Collapse>
    </React.Fragment>
  );
};

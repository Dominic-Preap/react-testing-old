import * as React from 'react';

import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  toolTipIcon: {
    marginRight: theme.spacing(1)
  },
  toolTipButton: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.2em',
    marginLeft: 'auto',
    textTransform: 'none',

    '&&:hover': {
      background: 'none'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '1em'
    }
  }
}));

interface Props {
  icon?: React.ComponentType<SvgIconProps>;
  onClick?: () => void;
  title?: string;
}

/**
 * Internal use for <Tabs/> only !!!
 */
export const TabToolTip: React.FC<Props> = ({ icon: Icon, onClick, title }) => {
  const classes = useStyles();
  return (
    <Button className={classes.toolTipButton} onClick={onClick} disableFocusRipple>
      {Icon && <Icon className={classes.toolTipIcon} />}
      <Hidden only={['xs']}>{title}</Hidden>
    </Button>
  );
};

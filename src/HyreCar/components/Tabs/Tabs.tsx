import * as React from 'react';

import blueGrey from '@material-ui/core/colors/blueGrey';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Tab from '@material-ui/core/Tab';
import MuiTabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import { TabToolTip } from './TabToolTip';

const useStyles = makeStyles(theme => ({
  // ========================
  //
  // ========================
  root: {
    width: '100%',
    borderBottom: `1px solid ${blueGrey[200]}`
  },

  tabsIndicator: {
    height: 3
  },

  // ========================
  //
  // ========================
  tabRoot: {
    height: 60,
    marginRight: 40,
    minWidth: 0,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  tabLabel: {
    fontWeight: 700,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    }
  },

  // ========================
  //
  // ========================
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

export interface Props {
  /**
   * Array of routes contains path to route and title
   */
  routes: Array<{ path: string; title: string }>;
  /**
   * Tooltip title if you have
   */
  tooltipTitle?: string;
  /**
   * Tooltip icon if you have
   */
  tooltipIcon?: React.ComponentType<SvgIconProps>;
  /**
   * Tooltip click action
   */
  tooltipOnclick?: () => void;
}

export const Tabs: React.FC<Props> = props => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  const { routes, tooltipIcon, tooltipTitle, tooltipOnclick } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item style={{ width: '100%' }}>
        <MuiTabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          classes={{ indicator: classes.tabsIndicator }}
        >
          {routes.map((x, i) => (
            <Tab
              wrapped
              className={classes.tabRoot}
              key={i}
              label={<Typography className={classes.tabLabel} variant="h5" children={x.title} />}
            />
          ))}

          <TabToolTip title={tooltipTitle} icon={tooltipIcon} onClick={tooltipOnclick} />
        </MuiTabs>
      </Grid>
    </Grid>
  );
};

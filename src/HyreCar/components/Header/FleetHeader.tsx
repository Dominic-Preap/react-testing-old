import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FlatButton } from '../Button/Button';

const useStyles = makeStyles(theme => ({
  // ====================================
  //
  // ====================================
  root: {
    flexGrow: 1,
    paddingBottom: 70,
    [theme.breakpoints.down('sm')]: {
      height: 55
    }
  },
  appBar: {
    background: '#fff',
    borderBottom: '1px solid #c2c9d6',
    height: 70,

    [theme.breakpoints.down('sm')]: {
      height: 55
    }
  },
  toolbar: {
    height: '100%',
    margin: '0 auto',
    width: '85%',

    [theme.breakpoints.down('sm')]: {
      minHeight: 55
    }
  },
  // ====================================
  //
  // ====================================
  avatar: {
    cursor: 'pointer',
    height: 43,
    margin: 10,
    marginLeft: 45,
    width: 43
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    flexGrow: 1,
    fontWeight: 800
  },

  popover: {
    background: 'red'
  },
  menuItem: {
    fontSize: 20,
    paddingBottom: 12,
    paddingTop: 12
  }
}));

export function FleetHeader() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Typography color="primary" variant="h5" className={classes.title}>
            HyreCar
          </Typography>
          <FlatButton>List a Car</FlatButton>
          <Avatar
            onClick={handleClick}
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        elevation={2}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorReference="anchorEl"
        MenuListProps={{ style: { width: 220 }, disablePadding: true }}
        marginThreshold={80} // https://github.com/mui-org/material-ui/issues/11123#issuecomment-427593070
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
      >
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

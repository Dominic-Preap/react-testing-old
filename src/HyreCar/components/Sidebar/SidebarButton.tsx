import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import { darken, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  linkWrapper: {
    color: '#fff',
    cursor: 'pointer',
    minWidth: 200,
    textAlign: 'center',
    textDecoration: 'none',

    '&&:active': {
      background: theme.palette.primary.main
    }
  },

  linkWrapperActive: {
    background: darken(theme.palette.primary.main, 0.1)
  },

  link: {
    display: 'flex',
    padding: '16px 14px',

    '&&:hover': {
      background: darken(theme.palette.primary.main, 0.1)
    }
  },

  linkText: {
    paddingLeft: 25
  },

  imageContainer: {
    marginTop: 4,
    width: 22
  }
}));

interface Props {
  /**
   * Menu title
   */
  text: string;
  /**
   * Menu Image Icon
   */
  img: string;
  /**
   * React router current location pathname
   */
  pathname: string;
  /**
   * Array of routes used to set active on menu by comparing with `pathname` props
   */
  pathnames: string[];
  /**
   * A string representation of the location to link to
   */
  path: string;
}
export const SidebarButton: React.FC<Props> = props => {
  const classes = useStyles();
  const { text, img, path, pathname, pathnames } = props;

  const activeClassName = clsx(classes.linkWrapper, pathnames.includes(pathname) && classes.linkWrapperActive);
  return (
    <div className={activeClassName}>
      <Link className={classes.link} color="inherit" underline="none" variant="h6" component={RouterLink} to={path}>
        <div className={classes.imageContainer}>
          <img src={img} alt="" />
        </div>
        <div className={classes.linkText}>{text}</div>
      </Link>
    </div>
  );
};

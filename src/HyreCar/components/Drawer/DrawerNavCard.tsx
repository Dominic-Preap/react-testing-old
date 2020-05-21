import * as React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import blue from '@material-ui/core/colors/blue';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
  chevron: {
    left: 0,
    right: 0,
    padding: 'inherit',
    paddingRight: 80,
    position: 'absolute',
    textAlign: 'right',
    top: -12
  },
  head: {
    fontSize: 30,
    paddingBottom: 24
  },
  root: {
    borderTop: `2px solid ${blue[50]}`,
    padding: 24,
    position: 'relative',

    '&&:hover': {
      background: blue[50],
      cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 20
    }
  }
}));

interface Props {
  head: string;
  content?: string;
  onClick?: () => void;
}

export const DrawerNavCard: React.FC<Props> = ({ head, content, onClick }) => {
  const classes = useStyles();

  return (
    <CardActionArea>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.chevron}>
          <KeyboardArrowRightIcon style={{ fontSize: 60 }} />
        </div>

        <Typography variant="h4" className={classes.head}>
          {head}
        </Typography>
        <div className="drawer-nav-content">
          <Typography variant="body1">{content}</Typography>
        </div>
      </div>
    </CardActionArea>
  );
};

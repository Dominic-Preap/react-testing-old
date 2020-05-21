import * as React from 'react';

import blueGrey from '@material-ui/core/colors/blueGrey';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles(theme => ({
  cardContent: {
    padding: '8px 8px 4px 16px',
    width: 'inherit'
  },
  button: {
    marginTop: -theme.spacing(1)
  },
  title: {
    color: blueGrey[600],
    fontWeight: 600
  },

  // https://css-tricks.com/flexbox-truncated-text/
  titleWrapper: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));

interface Props {
  title: string;
  onClick?: () => void;
}

export const WidgetHeader: React.FC<Props> = props => {
  const { title, onClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.cardContent}>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Grid item className={classes.titleWrapper}>
          <Typography gutterBottom variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Grid>

        <Grid item>
          <IconButton color="primary" aria-label="View More" className={classes.button} onClick={onClick}>
            <CallMadeIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

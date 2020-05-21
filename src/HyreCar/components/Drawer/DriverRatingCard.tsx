import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 88,
    margin: '0 30px',
    marginTop: theme.spacing(1),
    width: 88
  },
  title: {
    color: blueGrey[300],
    fontSize: 18,
    fontWeight: 600
  },
  username: {
    fontSize: 28
  }
}));

interface Props {
  caption: string;
  value: string;
  rating?: number;
  photoUrl?: string;
}
// TODO: responsive
export const DriverRatingCard: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6" className={classes.title}>
          {props.caption}
        </Typography>
        <Typography variant="h5" className={classes.username} gutterBottom>
          {props.value}
        </Typography>
        <StarRatings rating={props.rating} />
      </div>
      <div>
        <Avatar className={classes.avatar} src={props.photoUrl} alt="image" />
      </div>
    </div>
  );
};

export const StarRatings: React.FC<{ rating?: number }> = ({ rating = 0 }) => (
  <div>
    {[...Array(5).keys()].map(i => (
      <StarIcon key={i} style={{ paddingRight: 10, color: rating > i ? yellow[700] : grey[200] }} />
    ))}
  </div>
);

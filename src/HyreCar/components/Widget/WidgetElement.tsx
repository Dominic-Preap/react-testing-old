import * as React from 'react';

import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Shimmer } from '../Loading/Shimmer/Shimmer';
import { WidgetBody, WidgetBodyProps } from './WidgetBody';

const useStyles = makeStyles(theme => ({
  caption: {
    color: theme.palette.grey[600],
    fontWeight: 700
  },
  // set loading css to make sure the loading height are the same as render text
  loadingCaption: {
    marginBottom: 4
  },
  loadingValue: {
    marginBottom: 4
  },

  value: {
    color: blueGrey[600],
    fontWeight: 700
  }
}));

interface Props extends WidgetBodyProps {
  caption: string;
  loading?: boolean;
  value: string;
}

export const WidgetElement: React.FC<Props> = props => {
  const classes = useStyles();
  const { caption, loading, value, ...gridSize } = props;

  return (
    <WidgetBody {...gridSize}>
      {loading ? (
        <React.Fragment>
          <Shimmer height={28} width={100} className={classes.loadingValue} />
          <br />
          <Shimmer height={16} width={100} className={classes.loadingCaption} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography className={classes.value} variant="h5" component="h5">
            {value}
          </Typography>
          <Typography noWrap className={classes.caption} gutterBottom variant="overline">
            {caption}
          </Typography>
        </React.Fragment>
      )}
    </WidgetBody>
  );
};

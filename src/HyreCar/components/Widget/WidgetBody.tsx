import * as React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid, { GridSize } from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    padding: 10,
    paddingBottom: '10px !important',
    textAlign: 'center',
    width: '100%'
  }
}));

export interface WidgetBodyProps {
  md?: GridSize;
  sm?: GridSize;
  xs?: GridSize;
}

/**
 * Used as a body wrapper on WidgetElement, WidgetIcon, WidgetList and so on...
 */
export const WidgetBody: React.FC<WidgetBodyProps> = props => {
  const classes = useStyles();
  const { md = 6, sm = 12, xs = 12 } = props;

  return (
    <Grid className={classes.root} item xs={xs} sm={sm} md={md}>
      <CardContent className={classes.cardContent}>{props.children}</CardContent>
    </Grid>
  );
};

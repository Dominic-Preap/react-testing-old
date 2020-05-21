import * as React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%' // Used to make it equally stretching height
  }
}));

// https://stackoverflow.com/questions/43913054/reactjs-react-children-foreach-can-i-get-the-child-component-name
export const Widget: React.FC = props => {
  const classes = useStyles();
  const header = React.Children.toArray(props.children).find((x: any) => x.type.displayName === 'WidgetHeader');
  const children = React.Children.toArray(props.children).filter((x: any) => x.type.displayName !== 'WidgetHeader');
  return (
    <Card className={classes.card} elevation={2}>
      {header}
      <Grid container>{children}</Grid>
    </Card>
  );
};

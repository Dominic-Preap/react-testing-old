import * as React from 'react';

import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Shimmer } from '../Loading/Shimmer/Shimmer';

const useStyles = makeStyles(theme => ({
  // https://stackoverflow.com/questions/11267154/fit-cell-width-to-content
  caption: {
    borderBottomWidth: 0,
    color: theme.palette.grey[400],
    fontSize: 16,
    fontWeight: 600,
    padding: '6px 6px 6px 16px',
    textTransform: 'uppercase'
    // whiteSpace: 'nowrap',
    // width: '1%'
  },
  value: {
    borderBottomWidth: 0,
    color: blueGrey[600],
    fontSize: 18,
    fontWeight: 700,
    padding: 6
  }
}));

interface WidgetListItemProps {
  caption: string;
  loading?: boolean;
  value: string;
}

export const WidgetListItem: React.FC<WidgetListItemProps> = props => {
  const classes = useStyles();
  const { caption, loading, value } = props;

  return (
    <TableRow>
      <TableCell className={classes.caption}>{loading ? <Shimmer height={15} width={100} /> : caption}</TableCell>
      <TableCell className={classes.value}>{loading ? <Shimmer height={15} width={60} /> : value}</TableCell>
    </TableRow>
  );
};

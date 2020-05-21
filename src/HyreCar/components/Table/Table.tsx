import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';

import { FlatButton } from '../Button/Button';

const TableCell = styled(MuiTableCell)({
  padding: '10px 12px',
  border: '2px solid #FFF',
  fontSize: 17
});

const usedStyle = makeStyles(theme => ({
  root: {
    marginTop: '30px'
  },
  tableHeadCell: {
    color: '#4c4d4d',
    fontWeight: 'bold',
    padding: `30px 40px 30px 16px`
  },
  tableBody: {
    '&& tr': { cursor: 'pointer' },
    '&& tr:nth-child(odd)': { background: '#f4fbfd' }
  },
  noResultMessage: {
    color: theme.palette.grey[600]
  }
}));

interface Props {
  /**
   * Data to render on table row
   */
  data: Array<{ [key: string]: any }>;
  /**
   * If `key` is not define, it will render sequence number
   */
  fetching?: boolean;
  /**
   * Set disable Load More button, generally use after `onFetchMore`
   */
  hasNextPage?: boolean;
  /**
   * State for show/hide Load More button
   */
  headers: Array<{ label: string; key?: string }>;
  /**
   * Handle on Load More button
   */
  onFetchMore?: () => void;
  /**
   * Table Row Click Event
   */
  onRowClick?: (e: any) => void;
  /**
   * Message when result is empty. Default: `No Results !!!`
   */
  noResultMessage?: string;
  /**
   * Button Message below the message. Need both ButtonText & ButtonPath to render.
   */
  noResultButtonText?: string;
  /**
   * Button Router Path to redirect. Need both ButtonText & ButtonPath to render.
   */
  noResultButtonPath?: string;
}

export const Table = (props: Props) => {
  const {
    data,
    fetching,
    hasNextPage,
    headers,
    noResultButtonPath,
    noResultButtonText,
    noResultMessage,
    onFetchMore,
    onRowClick
  } = props;
  const classes = usedStyle(props);

  return (
    <React.Fragment>
      <MuiTable className={classes.root}>
        <TableHead>
          <TableRow>
            {headers.map((v, i) => (
              <TableCell variant="head" className={classes.tableHeadCell} key={i} children={v.label} />
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={classes.tableBody}>
          {/* Two Loop Here. Careful !!! */}
          {data.map((d, i) => (
            <TableRow key={i} onClick={onRowClick} data-id={d.id}>
              {/* ==================== */}
              {headers.map((h, index) =>
                // if Key is not define, render sequence number cell
                h.key ? (
                  <TableCell key={index} children={d[h.key]} />
                ) : (
                  <TableCell key={index} children={(i + 1).toString().padStart(2, '0')} />
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>

      {/* Render No Result component */}
      {!data.length && (
        <Box pt={15} textAlign="center">
          <Typography variant="h5" className={classes.noResultMessage}>
            {noResultMessage || 'No Results !!!'}
          </Typography>
          <br />
          {noResultButtonPath && noResultButtonText && (
            <Link component={RouterLink} to={noResultButtonPath} rel="noreferrer">
              {noResultButtonText}
            </Link>
          )}
        </Box>
      )}

      {/* Render Load More component */}
      <Box my={5} textAlign="center">
        {hasNextPage && (
          <FlatButton onClick={onFetchMore} disabled={fetching}>
            {fetching ? 'Loading...' : 'Load More'}
          </FlatButton>
        )}
      </Box>
    </React.Fragment>
  );
};

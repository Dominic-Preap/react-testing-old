import * as React from 'react';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  id: string;
  onClose?: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(3)
  },
  title: {
    fontSize: 22,
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export const DialogTitle: React.FC<Props> = props => {
  const classes = useStyles();
  const { children, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

import * as React from 'react';

import grey from '@material-ui/core/colors/grey';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withMobileDialog, { WithMobileDialog } from '@material-ui/core/withMobileDialog';
import { FlatButton, OutlinedButton } from 'HyreCar/components/Button';

import { DialogTitle } from './DialogTitle';

interface Props {
  open: boolean;

  confirmText: string;
  onConfirm?: () => void;

  cancelText: string;
  onCancel?: () => void;

  title: string;
  contentText: string;
}
interface ResponsiveDialogProps extends WithMobileDialog, Props {}

const useStyles = makeStyles(theme => ({
  scrollPaper: {
    [theme.breakpoints.up('sm')]: {
      alignItems: 'self-start',
      paddingTop: 65
    }
  },
  backDrop: {
    background: 'rgba(255, 255, 255, 0.8)'
  },
  paper: {
    border: `1px solid ${grey[300]}`
  },
  dialogContentText: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  dialogActions: {
    padding: 30,

    // Responsive on small screen
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      '& .MuiButton-fullWidth:not(:first-child)': {
        marginTop: 15,
        marginLeft: 0
      }
    }
  }
}));

const ResponsiveDialog: React.FC<ResponsiveDialogProps> = props => {
  const classes = useStyles();
  const { fullScreen, open, onCancel, cancelText, onConfirm, confirmText, contentText, title } = props;

  return (
    <MuiDialog
      classes={{ scrollPaper: classes.scrollPaper }}
      fullScreen={fullScreen}
      BackdropProps={{ className: classes.backDrop }}
      PaperProps={{ className: classes.paper, elevation: 0 }}
      aria-describedby="dialog-description"
      aria-labelledby="dialog-title"
      onClose={onCancel}
      open={open}
    >
      <DialogTitle id="dialog-title" onClose={onCancel}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogContentText} id="dialog-description">
          {contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <OutlinedButton fullWidth={fullScreen} onClick={onConfirm}>
          {confirmText}
        </OutlinedButton>
        <FlatButton fullWidth={fullScreen} onClick={onCancel}>
          {cancelText}
        </FlatButton>
      </DialogActions>
    </MuiDialog>
  );
};

export const Dialog: React.FC<Props> = withMobileDialog()(ResponsiveDialog) as any;

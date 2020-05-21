import * as React from 'react';

import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

type Props = Pick<FormHelperTextProps, 'children' | 'error' | 'id'>;

export const BasicHelperText: React.FC<Props> = props => {
  const classes = makeStyles(theme => ({
    root: {
      fontSize: 14,
      marginTop: 10
    }
  }))();

  return <FormHelperText className={classes.root} {...props} />;
};

import * as React from 'react';

import { InputLabelProps } from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

type Props = Pick<InputLabelProps, 'children' | 'error' | 'htmlFor' | 'id'>;

export const BasicInputLabel: React.FC<Props> = props => {
  const { error, ...restProps } = props;
  const classes = makeStyles(({ palette, spacing }) => ({
    root: {
      color: error ? palette.error.main : palette.text.primary,
      fontSize: 16,
      marginBottom: spacing(1.5)
    }
  }))();

  return props.children ? <label className={classes.root} {...restProps} /> : null;
};

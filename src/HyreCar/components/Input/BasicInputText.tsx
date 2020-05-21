import * as React from 'react';

import grey from '@material-ui/core/colors/grey';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

type Props = Pick<
  InputBaseProps,
  | 'aria-describedby'
  | 'children'
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'id'
  | 'multiline'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'onKeyDown'
  | 'placeholder'
  | 'rows'
  | 'type'
  | 'value'
>;

export const BasicInputText: React.FC<Props> = props => {
  const { error } = props;

  const classes = makeStyles(({ palette, spacing, transitions }) => {
    const focusColor = error ? palette.error.main : palette.primary.main;
    const borderColor = error ? palette.error.main : grey[400];
    return {
      input: {
        background: palette.common.white,
        border: `1px solid ${borderColor}`,
        height: props.rows ? 'auto' : spacing(3),
        padding: '10px 18px',
        transition: transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
          border: `1px solid ${focusColor}`,
          boxShadow: `inset ${focusColor} 0 0 0 1px`
        }
      },
      multiline: {
        padding: 0
      }
    };
  })();

  return <InputBase classes={{ input: classes.input, multiline: classes.multiline }} autoComplete="off" {...props} />;
};

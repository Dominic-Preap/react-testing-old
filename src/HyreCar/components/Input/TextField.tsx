import * as React from 'react';

import FormControl from '@material-ui/core/FormControl';

import { BasicHelperText } from './BasicHelperText';
import { BasicInputLabel } from './BasicInputLabel';
import { BasicInputText } from './BasicInputText';

interface Props {
  disabled?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  label?: string;
  multiline?: boolean;
  name: string;
  onBlur?: React.FocusEventHandler;
  onChange?: React.ChangeEventHandler;
  onFocus?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  placeholder?: string;
  rows?: number;
  type?: string;
  value?: string | number;
}

export const TextField: React.FC<Props> = props => {
  const {
    disabled,
    errorText,
    fullWidth,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    placeholder,
    rows,
    type,
    value
  } = props;

  const error = !!errorText;
  const describedby = `${name}-error-text`;
  return (
    <FormControl fullWidth={fullWidth}>
      <BasicInputLabel error={error} htmlFor={name} children={label} />
      <BasicInputText
        aria-describedby={describedby}
        disabled={disabled}
        error={error}
        id={name}
        multiline={multiline}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        rows={rows}
        type={type || 'text'}
        value={value}
      />
      {error && <BasicHelperText error={error} id={describedby} children={errorText} />}
    </FormControl>
  );
};

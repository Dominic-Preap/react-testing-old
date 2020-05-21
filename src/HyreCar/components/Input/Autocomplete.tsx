import * as React from 'react';
import Select from 'react-select';
import { MenuProps } from 'react-select/lib/components/Menu';
import { OptionProps } from 'react-select/lib/components/Option';
import { ActionMeta, ValueType } from 'react-select/lib/types';

import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { BasicHelperText } from './BasicHelperText';
import { BasicInputLabel } from './BasicInputLabel';

export interface OptionType {
  label: string | number;
  value: string | number;
}

export interface Props {
  defaultValue?: ValueType<OptionType>;
  disabled?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  label?: string;
  name: string;
  onBlur?: React.FocusEventHandler;
  onChange?: (value: ValueType<OptionType>, action: ActionMeta) => void;
  options: OptionType[];
  placeholder?: string;
}

function Menu(props: MenuProps<OptionType>) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

function Option(props: OptionProps<OptionType>) {
  return (
    <MenuItem
      className={props.selectProps.classes.menuItem}
      component="div"
      ref={props.innerRef}
      selected={props.isFocused}
      style={{ fontWeight: props.isSelected ? 600 : 400 }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  menuItem: {
    color: theme.palette.grey[800]
  }
}));

export const Autocomplete: React.FC<Props> = props => {
  const {
    defaultValue,
    disabled,
    errorText,
    fullWidth,
    isClearable,
    isLoading,
    isMulti,
    label,
    name,
    onBlur,
    onChange,
    options,
    placeholder
  } = props;
  const error = !!errorText;
  const describedby = `${name}-error-text`;
  const classes = useStyles();
  const mainColor = '#009CEC';
  return (
    <FormControl fullWidth={fullWidth}>
      <BasicInputLabel error={error} htmlFor={name} children={label} />

      <Select
        aria-describedby={describedby}
        classes={classes}
        components={{ Menu, Option }}
        defaultValue={defaultValue}
        id={name}
        isClearable={isClearable}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={{
          control: (provided, { isDisabled, isFocused }) => {
            const borderColor = error ? red.A400 : isFocused ? mainColor : '#B1B3B3';
            const boxShadow = !isFocused ? 'none' : `inset ${borderColor} 0 0 0 1px`;
            return {
              ...provided,
              backgroundColor: isDisabled ? '#F4F7FC' : 'white',
              borderColor,
              borderRadius: 2,
              boxShadow,
              cursor: isDisabled ? 'not-allowed' : 'auto',
              minHeight: 46,
              padding: '0 0 0 10px',
              '&:hover': { borderColor }
            };
          },
          indicatorSeparator: provided => ({ ...provided, marginTop: 0, marginBottom: 0 }),
          placeholder: provided => ({ ...provided, color: grey[400] }),
          multiValue: provided => ({ ...provided, background: mainColor, borderRadius: 10, paddingLeft: 5 }),
          multiValueLabel: provided => ({ ...provided, color: 'white' }),
          multiValueRemove: provided => ({
            ...provided,
            borderRadius: 10,
            color: 'white',
            cursor: 'pointer',
            margin: 2,
            paddingLeft: 2,
            paddingRight: 2,
          })
        }}
      />

      {error && <BasicHelperText error={error} id={describedby} children={errorText} />}
    </FormControl>
  );
};

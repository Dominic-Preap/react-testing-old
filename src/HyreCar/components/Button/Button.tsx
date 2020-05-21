import * as React from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';
import { darken, makeStyles } from '@material-ui/core/styles';
import facebook from 'assets/icons/facebook.svg';

const baseCSS: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  height: 48,
  padding: '0 40px',
  textTransform: 'capitalize',
  transition: '0.2s ease-out'
};
interface WithColor {
  /**
   * Button color
   *
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';
}
type ButtonAttributes = Pick<ButtonProps, 'onClick' | 'children' | 'disabled' |'fullWidth' | 'type'>;
type ButtonType = React.FC<ButtonAttributes>;
type ButtonWithColorType = React.FC<ButtonAttributes & WithColor>;

export const TextButton: ButtonType = props => {
  const classes = makeStyles({
    root: {
      ...baseCSS,

      '&&:disabled': {
        cursor: 'no-drop',
        opacity: 0.6
      },

      '&&:hover': {
        transition: '0.2s ease-out'
      }
    }
  })();
  return <Button className={classes.root} {...props} />;
};

export const OutlinedButton: ButtonWithColorType = props => {
  const { color = 'primary', ...restProps } = props;

  const classes = makeStyles(theme => {
    const mainColor = color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main;
    return {
      root: {
        ...baseCSS,

        borderColor: mainColor,
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 2,
        color: mainColor,

        '&&:disabled': {
          color: mainColor,
          cursor: 'no-drop',
          opacity: 0.6
        },

        '&&:hover': {
          background: mainColor,
          borderWidth: 2,
          color: theme.palette.primary.contrastText,
          transition: '0.2s ease-out'
        }
      }
    };
  })();

  return <Button className={classes.root} {...restProps} />;
};

export const FlatButton: ButtonWithColorType = props => {
  const { color = 'primary', ...restProps } = props;

  const classes = makeStyles(theme => {
    const mainColor = color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main;
    const { contrastText } = theme.palette.primary;
    return {
      root: {
        ...baseCSS,
        background: mainColor,
        color: contrastText,

        '&&:disabled': {
          color: contrastText,
          cursor: 'no-drop',
          opacity: 0.6
        },

        '&&:hover': {
          background: darken(mainColor, 0.1),
          transition: '0.2s ease-out'
        }
      }
    };
  })();

  return <Button className={classes.root} {...restProps} />;
};

export const FacebookButton: ButtonType = props => {
  const classes = makeStyles(theme => {
    const background = '#3b5998'; // Facebook main color
    const color = theme.palette.primary.contrastText;
    return {
      root: {
        ...baseCSS,
        background,
        color,

        '& img': {
          marginRight: 20
        },
        '&&:disabled': {
          color,
          cursor: 'no-drop',
          opacity: 0.6
        },
        '&&:hover': {
          background: darken(background, 0.1),
          transition: '0.2s ease-out'
        }
      }
    };
  })();

  return (
    <Button className={classes.root} onClick={props.onClick}>
      <img src={facebook} alt="facebook" />
      {props.children}
    </Button>
  );
};

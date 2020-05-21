import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { WidgetBody, WidgetBodyProps } from './WidgetBody';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main
  }
}));

interface Props extends WidgetBodyProps {
  icon: React.ElementType | string;
  size?: number;
}
export const WidgetIcon: React.FC<Props> = props => {
  const classes = useStyles();
  const { icon: Icon, size = 60, ...gridSize } = props;

  return (
    <WidgetBody {...gridSize}>
      {typeof Icon === 'string' ? (
        <img src={Icon} alt="icon" className={classes.root} style={{ fontSize: size }} />
      ) : (
        <Icon className={classes.root} style={{ fontSize: size }} />
      )}
    </WidgetBody>
  );
};

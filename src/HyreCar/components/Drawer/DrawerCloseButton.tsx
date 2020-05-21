import * as React from 'react';

import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import styled from 'styled-components';

export const Div = styled.div`
  margin-top: -12px;
  margin-left: -12px;
  padding-bottom: 4px;
`;

type Props = Pick<IconButtonProps, 'onClick'>;

export const DrawerCloseButton: React.FC<Props> = props => {
  return (
    <Div>
      <IconButton aria-label="Delete" {...props}>
        <ClearIcon fontSize="large" />
      </IconButton>
    </Div>
  );
};

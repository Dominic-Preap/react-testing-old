import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

// ========================
// NOTE: Subject to change
// ========================

const colors = (color: string, ignore?: string) => {
  if (color === ignore) return 'none';

  switch (color) {
    case 'red':
      return '#fa321e';
    case 'grey':
      return '#606770';
    case 'orange':
      return '#f39c12';
    default:
      return 'none';
  }
};
const Div = styled.div<{ color: string }>`
  color: ${props => colors(props.color)};
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;

const Dot = styled.div<{ color: string }>`
  border-radius: 100%;
  background: ${props => colors(props.color, 'orange')};
  border: ${props => '2px solid ' + colors(props.color)};
  height: 8px;
  margin: 0 10px;
  width: 8px;
`;

interface Props {
  color: 'red' | 'orange' | 'grey';
  status: string;
}

export const CarStatusIndicator: React.FC<Props> = ({ color, status }) => {
  return (
    <Div color={color}>
      <Dot color={color} />
      <Typography component="span">{status}</Typography>
    </Div>
  );
};

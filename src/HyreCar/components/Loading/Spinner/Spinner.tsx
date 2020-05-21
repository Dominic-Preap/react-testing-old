import * as React from 'react';

import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import styled, { keyframes } from 'styled-components';

interface Props {
  color: string;
  grey: string;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const SpinnerDiv = styled.div<Props>`
  animation: ${rotate} 0.5s linear infinite;
  border-radius: 100%;
  border-top-color: ${props => props.color} !important;
  border: 6px solid ${props => props.grey};
  height: 45px;
  width: 45px;
`;

export const Spinner = () => {
  const theme: Theme = useTheme();
  const props = {
    color: theme.palette.primary.main,
    grey: theme.palette.grey[200]
  };

  return (
    <SpinnerContainer>
      <SpinnerDiv {...props} />
    </SpinnerContainer>
  );
};

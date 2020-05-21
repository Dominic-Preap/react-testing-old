import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components';

interface SpanProps {
  value: number;
}

const rotate = keyframes`
  0% {
    transform: rotateZ(-20deg);
  }
  50% {
    transform: rotateZ(20deg) scaleY(1.2);
    background: rgb(163, 231, 252);
  }
  100% {
    transform: rotateZ(-20deg);
  }
`;

const LoadingContainer = styled.div`
  margin: 100px auto;
  text-align: center;
`;
const LoadingText = styled.div`
  margin-top: 40px;
`;

const LoadingWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 234px;
`;

const BaseSpan = styled.span`
  background-clip: padding-box;
  background: rgb(0, 157, 236);
  border-radius: 1063px;
  display: inline-block;
  height: 64px;
  margin: 0 5.5px;
  transform-origin: 50% 0%;
  width: 5.5px;
`;

// https://github.com/styled-components/styled-components/issues/630#issuecomment-462907177
const Span = styled(BaseSpan)<SpanProps>`
  animation: ${rotate} 1.45s ${props => `${0.07 + 0.08 * +props.value}s`} infinite cubic-bezier(0.005, 0.56, 0.58, 1.59);
`;

// TODO:
export const Chimes = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        {[...Array(10).keys()].map(i => (
          <Span value={i} key={i} />
        ))}
      </LoadingWrapper>
      <LoadingText>
        <Typography variant="h5" gutterBottom={true}>
          ...Loading Results
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          Please do not refresh the page
        </Typography>
      </LoadingText>
    </LoadingContainer>
  );
};

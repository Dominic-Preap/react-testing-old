import * as React from 'react';

import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  min-height: 10px;
  height: 10px;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;

const ProgressBarTransform = styled.div`
  background: #4dbaf2;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: inherit;
  left: 0;
  transform: translateX(-102%);
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease;
  width: 100%;
  position: absolute;
`;

const ProgressBarStep = styled.div`
  position: relative;
  flex-grow: 1;
  height: inherit;
  background: #ecedef;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    z-index: 4;
    width: 2px;
    height: inherit;
    background: #fff;
  }
`;

interface Props {
  maxStep: number;
  currentStep: number;
}

export const ProgressBar: React.FC<Props> = props => {
  const { currentStep, maxStep } = props;
  const currentTransform = 100.15 - (100 * currentStep) / maxStep;
  const steps = [];

  for (let i = 0; i < maxStep; i++) {
    steps.push(<ProgressBarStep key={i} />);
  }

  return (
    <ProgressBarContainer>
      {steps}
      <ProgressBarTransform style={{ transform: `translateX(-${currentTransform}%)` }} />
    </ProgressBarContainer>
  );
};

import * as React from 'react';

import defaultCar from 'assets/images/default-car.png';
import { Shimmer } from 'HyreCar/components/Loading';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 260px;
`;

export const DrawerPhoto: React.FC<{ src: string }> = props => {
  function onError(e: any) {
    e.target.onerror = null;
    e.target.src = defaultCar;
  }
  return <Img {...props} onError={onError} />;
};

export const DrawerLoadingPhoto: React.FC = props => (
  <Shimmer width="100%" style={{ padding: 45, textAlign: 'center' }}>
    <img src={defaultCar} alt="Default Car" />
  </Shimmer>
);

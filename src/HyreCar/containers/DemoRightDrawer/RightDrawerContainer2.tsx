import * as React from 'react';

import { OutlinedButton } from 'HyreCar/components/Button';
import {
  DrawerBottomContainer,
  DrawerLoadingPhoto,
  DrawerPhoto,
  DrawerScrollableContainer
} from 'HyreCar/components/Drawer';

interface Props {
  onClose: () => void;
}
export const RightDrawerContainer2: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <DrawerScrollableContainer>
        <DrawerPhoto src="https://media.zigcdn.com/media/model/2018/Jan/kia-stinger-right_600x300.jpg" />
        <DrawerPhoto src="https://media.zigcdn.com/media/model/2018/Jan/kia-stinger-right1_600x300.jpg" />
        <DrawerLoadingPhoto />
      </DrawerScrollableContainer>
      <DrawerBottomContainer>
        <OutlinedButton fullWidth onClick={props.onClose}>
          Exit
        </OutlinedButton>
      </DrawerBottomContainer>
    </React.Fragment>
  );
};

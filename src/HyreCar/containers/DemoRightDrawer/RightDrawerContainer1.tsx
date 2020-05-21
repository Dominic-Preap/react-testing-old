import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import { FlatButton, TextButton } from 'HyreCar/components/Button';
import {
  DrawerBottomContainer,
  DrawerCloseButton,
  DrawerNavCard,
  DrawerPaddedContainer,
  DrawerScrollableContainer,
  DrawerSection
} from 'HyreCar/components/Drawer';

interface Props {
  onClose: () => void;
}

export const RightDrawerContainer1: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <DrawerScrollableContainer>
        <DrawerPaddedContainer>
          <DrawerCloseButton />
          <DrawerSection head="Drawer Section">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi nulla, lobortis at magna non, congue
              commodo elit. Integer et fermentum urna. Nullam vitae nisl orci. Nunc aliquet mauris ut scelerisque
              varius. Nullam sit amet ipsum massa. In id lectus nulla. Nam est nisi, consectetur eget dignissim quis,
              ullamcorper a odio.
            </Typography>
          </DrawerSection>
        </DrawerPaddedContainer>
        <DrawerNavCard
          head="Listing Information"
          content="Update car mileage, price, discounts, allowed miles, images, registration, personal insurance, or inspection documents."
          onClick={() => alert('click me')}
        />
        <DrawerNavCard
          head="Protection Plan"
          content="Choose from our three protection plans. Spring for top-tier coverage or pocket more earnings with less coverage."
        />
      </DrawerScrollableContainer>
      <DrawerBottomContainer>
        <TextButton onClick={props.onClose}>Back</TextButton>
        <FlatButton> Continue</FlatButton>
      </DrawerBottomContainer>
    </React.Fragment>
  );
};

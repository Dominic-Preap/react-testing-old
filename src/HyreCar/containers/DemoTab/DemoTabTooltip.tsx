import * as React from 'react';

import Box from '@material-ui/core/Box';
import { FlatButton } from 'HyreCar/components/Button';
import {
  Drawer,
  DrawerBottomContainer,
  DrawerCloseButton,
  DrawerPaddedContainer,
  DrawerScrollableContainer
} from 'HyreCar/components/Drawer';

interface Props {
  contents: Array<{ title: string; description: string }>;
  onClose: () => void;
  open: boolean;
}
export const DemoTabTooltip: React.FC<Props> = props => {
  const { open, contents, onClose } = props;

  return (
    <Drawer open={open} onClickAway={onClose}>
      <DrawerScrollableContainer>
        <DrawerPaddedContainer>
          <DrawerCloseButton />
          {contents.map((x, i) => (
            <React.Fragment key={i}>
              <Box mb={1} fontSize={28}>
                {x.title}
              </Box>

              <Box mb={6} fontSize={20}>
                {x.description}
              </Box>
            </React.Fragment>
          ))}
        </DrawerPaddedContainer>
      </DrawerScrollableContainer>

      <DrawerBottomContainer>
        <FlatButton fullWidth onClick={onClose}>
          Got it!
        </FlatButton>
      </DrawerBottomContainer>
    </Drawer>
  );
};

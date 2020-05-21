import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { FlatButton, TextButton } from '../Button';
import { Drawer } from './Drawer';
import { DrawerBottomContainer } from './DrawerBottomContainer';
import { DrawerCloseButton } from './DrawerCloseButton';
import { DrawerNavCard } from './DrawerNavCard';
import { DrawerPaddedContainer } from './DrawerPaddedContainer';
import { DrawerPhoto } from './DrawerPhoto';
import { DrawerScrollableContainer } from './DrawerScrollableContainer';
import { DrawerSection } from './DrawerSection';
import { DrawerTooltip } from './DrawerTooltip';
import { DriverRatingCard } from './DriverRatingCard';

const renderDrawer = () => <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')} />;

const DrawerFullExample = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerPaddedContainer>
        <DrawerCloseButton onClick={action('CloseClick')} />
        {/* --------------------------------------------------------- */}
        <DrawerTooltip head="Lorem ipsum">
          <Typography variant="h6" component="h6" gutterBottom>
            Nullam vitae nisl orci?
          </Typography>
          <Typography variant="body1" component="p">
            Nunc aliquet mauris ut scelerisque varius. Nullam sit amet ipsum massa. In id lectus nulla. Nam est nisi,
            consectetur eget dignissim quis, ullamcorper a odio.
          </Typography>
        </DrawerTooltip>
        {/* --------------------------------------------------------- */}
        <DrawerSection head=" Lorem ipsum">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi nulla, lobortis at magna non, congue
            commodo elit. Integer et fermentum urna. Nullam vitae nisl orci. Nunc aliquet mauris ut scelerisque varius.
            Nullam sit amet ipsum massa. In id lectus nulla. Nam est nisi, consectetur eget dignissim quis, ullamcorper
            a odio.
          </Typography>
        </DrawerSection>
        {/* --------------------------------------------------------- */}
        <DriverRatingCard
          caption="Driver"
          value="Hiroko YMJ"
          rating={2}
          photoUrl="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </DrawerPaddedContainer>
      <DrawerNavCard
        head="Lorem ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClick={action('CardClick')}
      />
      <DrawerNavCard
        head="Pellentesque elit"
        content="Pellentesque elit eget gravida cum. Suscipit adipiscing bibendum est ultricies integer."
        onClick={action('CardClick')}
      />
    </DrawerScrollableContainer>
    <DrawerBottomContainer>
      <FlatButton fullWidth>Exit</FlatButton>
    </DrawerBottomContainer>
  </Drawer>
);

const DrawerBottomContainerWithOneButton = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerBottomContainer>
      <FlatButton fullWidth>Exit</FlatButton>
    </DrawerBottomContainer>
  </Drawer>
);

const DrawerBottomContainerWithTwoButtons = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerBottomContainer>
      <TextButton>Back</TextButton>
      <FlatButton>Confirm</FlatButton>
    </DrawerBottomContainer>
  </Drawer>
);

const DrawerBottomContainerWithTwoFullWidthButtons = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerBottomContainer>
      <FlatButton fullWidth>Message Driver</FlatButton>
      <FlatButton fullWidth>Confirm Pickup</FlatButton>
    </DrawerBottomContainer>
  </Drawer>
);

const DrawerScrollableContainerWithCloseButton = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerPaddedContainer>
        <DrawerCloseButton onClick={action('CloseClick')} />
      </DrawerPaddedContainer>
    </DrawerScrollableContainer>
  </Drawer>
);

const DrawerScrollableContainerWithTooltip = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerPaddedContainer>
        <DrawerTooltip head="Lorem ipsum">
          <Typography variant="h6" component="h6" gutterBottom>
            Nullam vitae nisl orci?
          </Typography>
          <Typography variant="body1" component="p">
            Nunc aliquet mauris ut scelerisque varius. Nullam sit amet ipsum massa. In id lectus nulla. Nam est nisi,
            consectetur eget dignissim quis, ullamcorper a odio.
          </Typography>
        </DrawerTooltip>
      </DrawerPaddedContainer>
    </DrawerScrollableContainer>
  </Drawer>
);

const DrawerScrollableContainerWithNavCard = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerNavCard
        head="Lorem ipsum"
        content="Generally use this component without <DrawerPaddedContainer/>. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onClick={action('CardClick')}
      />
      <DrawerNavCard
        head="Lorem ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClick={action('CardClick')}
      />
    </DrawerScrollableContainer>
  </Drawer>
);
const imageURL = 'https://www.enterprise.co.uk/content/dam/eu-brand/hp-lob-business-car-hire.png.wrend.640.360.png';
const DrawerScrollableContainerWithPhoto = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerPhoto src={text('Image URL', imageURL)} />
    </DrawerScrollableContainer>
  </Drawer>
);

const DrawerScrollableContainerWithSection = () => (
  <Drawer open={boolean('Open', true)} onClickAway={action('ClickAway')}>
    <DrawerScrollableContainer>
      <DrawerPaddedContainer>
        <DrawerSection head=" Lorem ipsum">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi nulla, lobortis at magna non, congue
            commodo elit. Integer et fermentum urna. Nullam vitae nisl orci. Nunc aliquet mauris ut scelerisque varius.
            Nullam sit amet ipsum massa. In id lectus nulla. Nam est nisi, consectetur eget dignissim quis, ullamcorper
            a odio.
          </Typography>
        </DrawerSection>
      </DrawerPaddedContainer>
    </DrawerScrollableContainer>
  </Drawer>
);

storiesOf('HyreCar|Components/Drawer', module)
  .add('Default', renderDrawer)
  .add('Full Example', DrawerFullExample);

storiesOf('HyreCar|Components/Drawer/DrawerBottomContainer', module)
  .add('One Button', DrawerBottomContainerWithOneButton)
  .add('Two Buttons', DrawerBottomContainerWithTwoButtons)
  .add('Two Full Width Buttons', DrawerBottomContainerWithTwoFullWidthButtons);

storiesOf('HyreCar|Components/Drawer/DrawerScrollableContainer', module)
  .add('DrawerCloseButton', DrawerScrollableContainerWithCloseButton)
  .add('DrawerTooltip', DrawerScrollableContainerWithTooltip)
  .add('DrawerNavCard', DrawerScrollableContainerWithNavCard)
  .add('DrawerPhoto', DrawerScrollableContainerWithPhoto)
  .add('DrawerSection', DrawerScrollableContainerWithSection);

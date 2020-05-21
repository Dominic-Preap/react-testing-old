import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { Drawer } from 'HyreCar/components/Drawer';
import { RoutePath } from 'HyreCar/Enums/RoutePath';
import wait from 'tests/wait';

import { RightDrawerContainer1 } from './RightDrawerContainer1';
import { RightDrawerContainer2 } from './RightDrawerContainer2';

const DemoRightDrawer: React.FC<RouteComponentProps> = props => {
  const [open, setOpen] = React.useState(false);

  // https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
  React.useEffect(checkRouteToOpenDrawer, []);

  function checkRouteToOpenDrawer() {
    const drawerOpen = [RoutePath.demoDrawerOne, RoutePath.demoDrawerTwo].includes(props.location.pathname);
    if (drawerOpen) setOpen(true);
  }

  function OpenRoute(path: string) {
    props.history.push(path);
    setOpen(true);
  }
  async function CloseRoute() {
    setOpen(false);
    await wait(300);
    props.history.push(RoutePath.demoDrawer);
  }
  return (
    <div>
      <br />
      <button onClick={() => OpenRoute(RoutePath.demoDrawerOne)}>Open Drawer Demo 1</button>
      <button onClick={() => OpenRoute(RoutePath.demoDrawerTwo)}>Open Drawer Demo 2</button>

      <Drawer open={open} onClickAway={CloseRoute}>
        <Route path={RoutePath.demoDrawerOne} render={() => <RightDrawerContainer1 onClose={CloseRoute} />} />
        <Route path={RoutePath.demoDrawerTwo} render={() => <RightDrawerContainer2 onClose={CloseRoute} />} />
      </Drawer>
    </div>
  );
};

export default DemoRightDrawer;

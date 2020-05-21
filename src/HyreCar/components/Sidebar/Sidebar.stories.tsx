import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Calendar from 'assets/icons/calendar-white.svg';
import Home from 'assets/icons/dashboard-white.svg';
import Settings from 'assets/icons/settings-white.svg';

import { Sidebar } from './Sidebar';
import { SidebarButton } from './SidebarButton';

const renderSidebar = () => (
  <div style={{ position: 'fixed', left: 0 }}>
    <Sidebar>
      <SidebarButton path="/1" pathname="/current" pathnames={['/1']} text="Dashboard" img={Home} />
      <SidebarButton path="/2" pathname="/current" pathnames={['/2']} text="Rentals" img={Calendar} />
      <SidebarButton path="/3" pathname="/current" pathnames={['/3']} text="Settings" img={Settings} />
    </Sidebar>
  </div>
);

// https://github.com/storybookjs/storybook/issues/769#issuecomment-294082103
// https://github.com/storybookjs/storybook/issues/3758 (TODO:)
storiesOf('HyreCar|Components', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .addParameters(withInfo({ propTablesExclude: [MemoryRouter] }))
  .add('Sidebar', renderSidebar);
